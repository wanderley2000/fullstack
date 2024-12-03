const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/clientes', registerController.addClient);
router.get('/clientes/:identificacion', registerController.getClienteByidentificacion);
router.put('/clientes/:identificacion', registerController.updateCliente);

module.exports = router;