const express = require('express');
const { login, register, getCurrentUser } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');


const router = express.Router();

// Debug: ensure handlers are functions
console.log('login is function:', typeof login === 'function');
console.log('register is function:', typeof register === 'function');
console.log('getCurrentUser is function:', typeof getCurrentUser === 'function');

router.post('/login', login);
router.post('/register', register);
router.get('/me', auth, getCurrentUser);

module.exports = router;
