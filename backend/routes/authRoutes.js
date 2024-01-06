// server/routes/authRoutes.js
const express = require('express');
const authController = require('../lib/DB');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/users', authController.getAllUsers);
router.get('/counts', authController.getTotalCounts);
router.delete('/remove/:id', authController.removeUser);

module.exports = router;