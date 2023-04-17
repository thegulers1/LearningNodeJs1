const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const accountRoutes = require('./routes/account');
var cookieParser = require('cookie-parser')
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

app.use(session({
    secret :'keyboard-cat',
    resave : false,
    saveUninitialized : false,
    cookie:{maxAge:360000}
}));

var 

const path = require('path');  
const errorController = require('./controller/errors')
app.set("view engine", "pug");

const connection = require('./utility/database');  
const sql = require("msnodesqlv8");

const sequelize = require('./utility/database');  

const Category  = require('./models/category')
const Product  = require('./models/product')
const User  = require('./models/user')

 
app.use(bodyParser.urlencoded({extended:false})) // bunu html send ederken gomulu kullanmıstık ama sanırım artık ıhtıyac yok :-D
app.use(express.static(path.join(__dirname,'public')));// bu dosya ıcını dısarıya actık boylece html ıcınde stle ı kullandık.
//routes
app.use('/admin',adminRoutes);
app.use(userRoutes);
app.use(accountRoutes);
app.use(session({
    secret :'keyboard-cat',
    resave : false,
    saveUninitialized : false,
    //cookie :{maxAge:3600000, secure:true}

}));

 

app.get('/',(req,res,next)=>{
    
    res.send('Hello World')
})


//Product.belongsTo(Category,{foreignKey:{allowNull : false}}); // 1 ürün 1 kategoriye aittir
//Category.hasMany(Product); // 1 kategori 1 den fazla ürüne aittir.

sequelize
    //.sync({force : true}).then((result)=>{
    .sync().then(()=>{
       User.findByPk(1)
        .then()
        .then()
        
        Category.count()
            .then(count=>{
                if(count === 0 )
                Category.bulkCreate([
                    {
                        name : 'Telefon',description:'telefon kategorisi',
                        
                    },
                    {
                        name: 'bilgisayar', description : 'bilgisayar'
                    } 
                ])
            })
  

}).catch((err)=>{
    console.log(err)
});

app.use(errorController.get404Page);
app.listen(5000,()=>{

})