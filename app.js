const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const path = require('path');
const userRoutes = require('./routes/user');
 
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false})) // bunu html send ederken gomulu kullanmıstık ama sanırım artık ıhtıyac yok :-D
app.use(express.static(path.join(__dirname,'public')));// bu dosya ıcını dısarıya actık boylece html ıcınde stle ı kullandık.
//routes
app.use('/admin',adminRoutes);
app.use(userRoutes);
 
//404page

app.get('/',(req,res,next)=>{
    
    res.send('Hello World')
})

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','/404.html'))
});
app.listen(3000,()=>{

})