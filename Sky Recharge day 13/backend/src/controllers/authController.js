const User = require('../models/userModel');
const LoginHistory = require('../models/loginHistory');
const jwt = require('jsonwebtoken');

// REGISTER
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const user = new User({ email, password, role: 'user' });
    await user.save();

    res.status(201).json({ success: true, message: 'Signup successful' });
  } catch (error) {
    console.error('Register error:', error.message);
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // ✅ Save login history entry
    await LoginHistory.create({
      userId: user._id,
      email: user.email
    });

    res.json({
      success: true,
      token,
      user: { id: user._id, email: user.email }
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
};

// ME
const getCurrentUser = async (req, res) => {
  res.json({ success: true, user: req.user });
};

module.exports = { register, login, getCurrentUser };
