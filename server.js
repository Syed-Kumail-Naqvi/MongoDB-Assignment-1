const express = require('express');
const app = express();
const router = require('./Routes/router');

app.use(express.json()); // Body ke Data ko Json mein convert krta
app.use('/',router)

app.listen(5000, ()=> console.log('Server Is Running On Port 5000'))