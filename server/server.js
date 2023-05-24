const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();
// app.use(express.urlencoded());
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,            
    optionSuccessStatus:200,
}));

// mongoose connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('DB is connected'))
    .catch((err)=> console.log('DB Error', err));



// middlewares    
app.use('/auth',  require('./routers/user'));
app.use('/',  require('./routers/bid'));

// server 
const PORT = 8000
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))