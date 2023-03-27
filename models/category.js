const categories = [
    {id:"1", name:"telefon", description:"telefon ürünleri"},
    {id:"2", name:"bilgisayar", description:"bilgisayar ürünleri"},
    {id:"3", name:"beyaz eşya", description:"beyaz eşya ürünleri"}

]
module.exports = class Category{
    constructor(name, description){
        this.id = (categories.length+1).toString();
        this.name = name;
        this.description = description;
    }
    saveCategory(){
        categories.push(this)
    }
    static getAll(){
        return categories;
    }
    static getById(id){
        return categories.find(i => i.id === id)
    }
    static update(category){
        const index = categories.findIndex(i => i.id === categories.id);
        categories[index].name  = category.name;
        categories[index].description  = category.description;

    }
    static delete(category){
        const index = categories.findIndex(i => i.id === categories.id);
        categories.splice(index,1);

    }
} 