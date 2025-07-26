const express = require('express');
const router = express.Router();
const controller = require('../controllers/attendance.controller');
const auth = require('../middleware/authMiddleware');

router.post('/checkin', auth, controller.checkIn);
router.post('/checkout', auth, controller.checkOut);
router.get('/me', auth, controller.myAttendance);
router.get('/all', auth, controller.getAllAttendance); // Optional: Add role middleware here

module.exports = router;
