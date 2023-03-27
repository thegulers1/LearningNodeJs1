const products = [
    {id:"121223",name:'Samsung S8',price:3000,image:'1.jpg',description:'iyi telefon',categoryid:"2"},
    {id:"121221",name:'Samsung S7',price:4000,image:'1.jpg',description:'idare telefon',categoryid:"1"},
    {id:"121224",name:'Samsung S6',price:5000,image:'1.jpg',description:'kötü telefon',categoryid:"2"},
    {id:"121226",name:'Samsung S9',price:6000,image:'1.jpg',description:'müko telefon',categoryid:"3"}
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
        return products.find(i => i.id === id)
        
        //find aynı urun varsa getırır ıd ler eslesen 
            
    }
   
    static getProductsByCategoryId(categoryid){
        return products.filter(i => i.categoryid === categoryid)
        //filter butun urunlerı ceker id leri eşleşen
    }

    static Update(product){
        const index = products.findIndex(i => i.id === product.id);
        
        products[index].name = product.name;
        products[index].price = product.price;
        products[index].image = product.image;
        products[index].description = product.description;

    }
    static DeleteById(id){
        const index = products.findIndex(i => i.id === id)
        products.splice(index,1);
    }
}   
