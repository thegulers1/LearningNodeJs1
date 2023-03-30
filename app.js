const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const path = require('path');  
const errorController = require('./controller/errors')
app.set("view engine", "pug");

const connection = require('./utility/database');  
const sql = require("msnodesqlv8");

const sequelize = require('./utility/database');  

 
app.use(bodyParser.urlencoded({extended:false})) // bunu html send ederken gomulu kullanmıstık ama sanırım artık ıhtıyac yok :-D
app.use(express.static(path.join(__dirname,'public')));// bu dosya ıcını dısarıya actık boylece html ıcınde stle ı kullandık.
//routes
app.use('/admin',adminRoutes);
app.use(userRoutes);
 
 

app.get('/',(req,res,next)=>{
    
    res.send('Hello World')
})

sequelize.sync().then((result)=>{
    console.log(result)

}).catch((err)=>{
    console.log(err)
});

app.use(errorController.get404Page);
app.listen(5000,()=>{

})