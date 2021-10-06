//set enviorment variables
require('dotenv').config();
const cors = require('cors');
// set express router
const router = require('./routes/mail.routes');
const homeRouter = require('./routes/home.routes');

const express  = require('express');
const app = express();

//express Config
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api',router);
app.use('/api',homeRouter)


app.listen(process.env.PORT,console.log(`app running in port ${process.env.PORT}`));