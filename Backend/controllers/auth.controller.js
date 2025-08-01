const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { Username, email, password, role } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ Username, email, password: hash, role });
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed', details: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    console.log("user found: ",user);
    if (!user) return res.status(401).json({ message: 'Invalid email' });

    const match = await bcrypt.compare(password, user.password);
    console.log("password match: ",match);

    if (!match) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user });
  } catch (err) {

    console.error("Login error: ", err);
    res.status(500).json({ error: 'Login failed' });
  }
};



