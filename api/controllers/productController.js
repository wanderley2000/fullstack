const db = require('../db');

//Añadir los productos.
exports.addProduct = (req, res) => {
    const { nombre, marca, descripcion, inventario, valor, vendido, imagen } = req.body;
    const estadoInicial = inventario > 0 ? 1 : 0;

    const sql = 'INSERT INTO productos (nombre, marca, descripcion, inventario, valor, vendido, estado, imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre, marca, descripcion, inventario, valor, vendido, estadoInicial, imagen], (error) => {
        if (error) {
            console.error('Error al agregar el producto:', error);
            return res.status(400).json({ message: 'Error al agregar el producto.' });
        }
        res.status(201).json({ message: 'Producto agregado exitosamente.' });
    });
};

//Obtener los productos
exports.getProducts = (req, res) => {
    db.query('SELECT * FROM productos WHERE estado = 1', (error, results) => {
        if (error) {
            console.error('Error al obtener productos:', error);
            return res.status(500).json({ message: 'Error al obtener productos.', error: error.message });
        }
        res.json(results);
    });
};

//Obtener los productos por ID, me sirve para el ShowProducts
exports.getProductById = (req, res) => {
    const { id } = req.params;
  
    db.query('SELECT * FROM productos WHERE id = ? AND estado = 1', [id], (error, results) => {
      if (error) {
        console.error('Error al obtener el producto:', error);
        return res.status(500).json({ message: 'Error al obtener el producto.', error: error.message });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ message: 'Producto no encontrado.' });
      }
  
      res.json(results[0]);
    });
  };  

  //Actualizar producto
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, inventario, valor, vendido, imagen } = req.body;

    const nuevoInventario = inventario - vendido;
    const nuevoEstado = nuevoInventario > 0 ? 1 : 0;

    const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, inventario = ?, valor = ?, vendido = ?, imagen = ?, estado = ? WHERE id = ?';
    db.query(sql, [nombre, descripcion, nuevoInventario, valor, vendido, imagen, nuevoEstado, id], (error, results) => {
        if (error) {
            console.error('Error al editar el producto:', error);
            return res.status(400).json({ message: 'Error al editar el producto.' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }
        res.json({ message: 'Producto editado exitosamente.' });
    });
};

//Eliminar productos
exports.deleteProduct = (req, res) => {
    const { id } = req.params;

    db.query('SELECT * FROM productos WHERE id = ?', [id], (error, results) => {
        if (error || results.length === 0) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }

        const product = results[0];
        //Insercion en una nueva tabla para llevar trazabilidad.
        db.query('INSERT INTO productos_eliminados (nombre, marca, descripcion, inventario, valor, vendido, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [product.nombre, product.marca, product.descripcion, product.inventario, product.valor, product.vendido, product.imagen], 
            (err) => {
                if (err) {
                    console.error('Error al agregar el producto a la tabla de eliminados:', err);
                    return res.status(500).json({ message: 'Error al registrar el producto eliminado.' });
                }

                db.query('DELETE FROM productos WHERE id = ?', [id], (deleteError) => {
                    if (deleteError) {
                        console.error('Error al eliminar el producto:', deleteError);
                        return res.status(500).json({ message: 'Error al eliminar el producto.' });
                    }
                    res.json({ message: 'Producto eliminado exitosamente.' });
                });
            });
    });
};

exports.registerSale = (req, res) => {
    const { id_compra, productos, nombre_comprador, documento_comprador } = req.body;
  
    // Verificar si los datos fueron enviados correctamente
    if (!id_compra || !productos || !nombre_comprador || !documento_comprador) {
      return res.status(400).json({ message: 'Faltan datos para registrar la venta.' });
    }
  
    // Iniciar transacción para garantizar la integridad de los datos
    db.beginTransaction((transactionError) => {
      if (transactionError) {
        console.error('Error al iniciar la transacción:', transactionError);
        return res.status(500).json({ message: 'Error al iniciar la transacción.' });
      }
  
      // Recorrer los productos y registrar cada uno
      productos.forEach((producto) => {
        const { id, nombre, valor, cantidad } = producto;
  
        // Asegurarse de que la cantidad y valor sean números válidos
        if (isNaN(cantidad) || isNaN(valor)) {
          console.error('Cantidad o valor inválido:', cantidad, valor);
          return db.rollback(() => {
            res.status(400).json({ message: 'Cantidad o valor inválido para uno de los productos.' });
          });
        }
  
        const total = valor * cantidad;
  
        // Insertar la venta en la tabla de ventas
        const sqlInsertVenta = `
          INSERT INTO ventas (id_compra, producto_id, nombre_producto, valor, cantidad, total, nombre_comprador, documento_comprador)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
  
        db.query(sqlInsertVenta, [id_compra, id, nombre, valor, cantidad, total, nombre_comprador, documento_comprador], (error) => {
          if (error) {
            console.error('Error al registrar la venta:', error);
            return db.rollback(() => {
              res.status(500).json({ message: 'Error al registrar la venta.' });
            });
          }
  
          // Verificar que el inventario actual sea un número válido
          db.query('SELECT inventario FROM productos WHERE id = ?', [id], (inventoryError, results) => {
            if (inventoryError || results.length === 0) {
              console.error('Error al obtener inventario:', inventoryError);
              return db.rollback(() => {
                res.status(500).json({ message: 'Error al obtener el inventario.' });
              });
            }
  
            const currentInventory = results[0].inventario;
            const newInventory = currentInventory - cantidad;
  
            // Verificar que el nuevo inventario sea válido (mayor o igual a 0)
            if (isNaN(newInventory) || newInventory < 0) {
              console.error('Inventario no válido:', newInventory);
              return db.rollback(() => {
                res.status(400).json({ message: 'Inventario insuficiente o cálculo incorrecto.' });
              });
            }
  
            // Actualizar el inventario del producto en la tabla de productos
            const sqlUpdateInventario = 'UPDATE productos SET inventario = ? WHERE id = ?';
            db.query(sqlUpdateInventario, [newInventory, id], (updateError) => {
              if (updateError) {
                console.error('Error al actualizar el inventario:', updateError);
                return db.rollback(() => {
                  res.status(500).json({ message: 'Error al actualizar el inventario.' });
                });
              }
            });
          });
        });
      });
  
      // Si todo fue exitoso, hacer commit de la transacción
      db.commit((commitError) => {
        if (commitError) {
          console.error('Error al hacer commit de la transacción:', commitError);
          return db.rollback(() => {
            res.status(500).json({ message: 'Error al registrar la venta.' });
          });
        }
        res.status(201).json({ message: 'Venta registrada exitosamente.' });
      });
    });
  };  