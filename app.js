const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


//import route
const todo = require('./routes/todoRoutes');


//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.json({
    limit:'5mb',
    extended:true
})) ;

app.use(cors());

//route middleware
app.use('/api',todo);
//
const port = 6000;
app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
})