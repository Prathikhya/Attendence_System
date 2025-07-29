const express = require('express');
// const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const attendanceRoutes = require('./routes/attendance.routes');


require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);

app.get('/home', (req, res) => {
    res.send("Welcome to the army page");
});


app.get('/', (req, res) => {
    res.send('Hello Bts');
});
sequelize.authenticate()
  .then(() => {
    console.log("✅ Database connected successfully");
    // Sync models (creates tables if not exist)
    return sequelize.sync();
  }).then(() => {
    app.listen(port,() => {
    console.log("Server is Listening on the port " + port);
    });
    
})
.catch(err => {
    console.error("❌ Error connecting to database:", err);
  });
