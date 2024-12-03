const db = require('../db');

//Agregar un cliente para obtenerlo al momento de pagar
exports.addClient = (req, res) => {
    const { nombres, identificacion, celular, email, direccion} = req.body;

    const sql = 'INSERT INTO clientes (nombres, identificacion, celular, email, direccion) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombres, identificacion, celular, email, direccion], (error) => {
        if (error) {
            console.error('Error al registrar el cliente:', error);
            return res.status(400).json({ message: 'Error al registrar el cliente.' });
        }
        res.status(201).json({ message: 'Cliente registrado exitosamente.' });
    });
};

//Obtenemos un cliente por su numero de identificacion
exports.getClienteByidentificacion = (req, res) => {
    const { identificacion } = req.params; 
    console.log("identificacion recibido:", identificacion);
  
    const sql = 'SELECT * FROM clientes WHERE identificacion = ?';
    console.log("Consulta SQL:", sql);
  
    db.query(sql, [identificacion], (error, results) => {
      if (error) {
        console.error('Error al obtener el cliente:', error);
        return res.status(500).json({ message: 'Error al obtener el cliente.' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ message: 'Cliente no encontrado.' });
      }
  
      res.status(200).json(results[0]);
    });
  };
  
  // Actualizar los campos calular y direccion
  exports.updateCliente = (req, res) => {
    const { identificacion } = req.params;
    const { celular, direccion } = req.body;
  
    const sql = 'UPDATE clientes SET celular = ?, direccion = ? WHERE identificacion = ?';
    db.query(sql, [celular, direccion, identificacion], (error, results) => {
      if (error) {
        console.error('Error al actualizar el cliente:', error);
        return res.status(500).json({ message: 'Error al actualizar los datos del cliente.' });
      }
  
      res.status(200).json({ message: 'Datos actualizados correctamente.' });
    });
  };