const products = [
    {id:"121223",name:'Samsung S8',price:3000,image:'1.jpg',description:'iyi telefon'},
    {id:"121221",name:'Samsung S7',price:4000,image:'1.jpg',description:'idare telefon'},
    {id:"121224",name:'Samsung S6',price:5000,image:'1.jpg',description:'kötü telefon'},
    {id:"121226",name:'Samsung S9',price:6000,image:'1.jpg',description:'müko telefon'}
 ];
//const products = [];
module.exports = class Product{
    constructor(name,price,image,description){      
        this.Id = (Math.floor(Math.random()*9999+1).toString());
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }  
    //fonksiyon class ıcınde oldugu ıcın basında function kullanmıyoruz   
    saveProduct(){
        products.push(this);
    }
    static getAll(){
        return products;
    }
    static getById(id){
        const product = products.find(i => i.id === id)
        return product;
    }
    static Update(product){
        const index = products.findIndex(i => i.id === product.id);
        
        products[index].name = product.name;
        products[index].price = product.price;
        products[index].image = product.image;
        products[index].description = product.description;

    }
}   
