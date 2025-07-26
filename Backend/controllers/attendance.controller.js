const { Attendance } = require('../models');

exports.checkIn = async (req, res) => {
  const userId = req.user.id;
  const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
  try {
    const existing = await Attendance.findOne({ where: { userId, date: today } });
    if (existing) return res.status(400).json({ message: 'Already checked in today' });

    const record = await Attendance.create({ userId, date: today, checkIn: new Date() });
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: 'Check-in failed', details: err });
  }
};

exports.checkOut = async (req, res) => {
  const userId = req.user.id;
  const today = new Date().toISOString().slice(0, 10);
  try {
    const record = await Attendance.findOne({ where: { userId, date: today } });
    if (!record) return res.status(400).json({ message: 'Check-in required' });

    record.checkOut = new Date();
    await record.save();
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: 'Check-out failed', details: err });
  }
};

exports.myAttendance = async (req, res) => {
  const userId = req.user.id;
  try {
    const records = await Attendance.findAll({ where: { userId } });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: 'Could not retrieve records' });
  }
};

exports.getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.findAll({ include: 'User' });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: 'Could not retrieve all records' });
  }
};
