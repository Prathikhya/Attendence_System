const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');


dotenv.config();
const port = process.env.PORT || 3000;


app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello Bts');
});

app.listen(port,() => {
    console.log("Server is Listening on the port " + port);
    
})
