const categories = [
    {id:"1", name:"telefon", description:"telefon ürünleri"},
    {id:"1", name:"bilgisayar", description:"bilgisayar ürünleri"},
    {id:"1", name:"beyaz eşya", description:"beyaz eşya ürünleri"}

]
module.exports = class category{
    constructor(name, description){
        this.id = (categories.length+1).toString();
        this.name = name;
        this.description = description;
    }
    saveCategory(){
        categories.push(this)
    }
} 