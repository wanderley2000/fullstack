const db = require('../db');

exports.addProduct = (req, res) => {
    const { nombre, marca, inventario, valor, vendido } = req.body;
    const estadoInicial = inventario > 0 ? 1 : 0;

    const sql = 'INSERT INTO productos (nombre, marca, inventario, valor, vendido, estado) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre, marca, inventario, valor, vendido, estadoInicial], (error) => {
        if (error) {
            console.error('Error al agregar el producto:', error);
            return res.status(400).json({ message: 'Error al agregar el producto.' });
        }
        res.status(201).json({ message: 'Producto agregado exitosamente.' });
    });
};

exports.getProducts = (req, res) => {
    db.query('SELECT * FROM productos WHERE estado = 1', (error, results) => {
        if (error) {
            console.error('Error al obtener productos:', error);
            return res.status(500).json({ message: 'Error al obtener productos.', error: error.message });
        }
        res.json(results);
    });
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { nombre, inventario, valor, vendido } = req.body;

    const nuevoInventario = inventario - vendido;
    const nuevoEstado = nuevoInventario > 0 ? 1 : 0;

    const sql = 'UPDATE productos SET nombre = ?, inventario = ?, valor = ?, vendido = ?, estado = ? WHERE id = ?';
    db.query(sql, [nombre, nuevoInventario, valor, vendido, nuevoEstado, id], (error, results) => {
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

exports.deleteProduct = (req, res) => {
    const { id } = req.params;

    db.query('SELECT * FROM productos WHERE id = ?', [id], (error, results) => {
        if (error || results.length === 0) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }

        const product = results[0];

        db.query('INSERT INTO productos_eliminados (nombre, marca, inventario, valor, vendido) VALUES (?, ?, ?, ?, ?)', 
            [product.nombre, product.marca, product.inventario, product.valor, product.vendido], 
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