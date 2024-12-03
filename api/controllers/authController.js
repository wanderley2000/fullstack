const bcrypt = require('bcryptjs');
const db = require('../db');

exports.register = (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ message: 'Error en la contraseña.' });

        db.query('INSERT INTO users (email, password, profile) VALUES (?, ?, ?)', [email, hash, 0], (error) => {
            if (error) return res.status(400).json({ message: 'Error al registrar el usuario.' });
            res.status(201).json({ message: 'Usuario registrado exitosamente.' });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error || results.length === 0) return res.status(400).json({ message: 'Usuario no encontrado.' });

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Error al comparar la contraseña.' });
            if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta.' });
            res.status(200).json({ message: 'Inicio de sesión exitoso.' });
        });
    });
};