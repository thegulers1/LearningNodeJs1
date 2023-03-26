const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const path = require('path');  
const errorController = require('./controller/errors')
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({extended:false})) // bunu html send ederken gomulu kullanmıstık ama sanırım artık ıhtıyac yok :-D
app.use(express.static(path.join(__dirname,'public')));// bu dosya ıcını dısarıya actık boylece html ıcınde stle ı kullandık.
//routes
app.use('/admin',adminRoutes);
app.use(userRoutes);
 

app.get('/',(req,res,next)=>{
    
    res.send('Hello World')
})
//404page
app.use(errorController.get404Page);
app.listen(3000,()=>{

})