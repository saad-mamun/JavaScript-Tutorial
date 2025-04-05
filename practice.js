class car {
    constructor(Brand){
        this.Brand = Brand;
    }
    parent(){
        return "My brand name is " + this.Brand
    }
}

class Model extends car{
    constructor(Brand,Model){
        super(Brand);
        this.Model = Model;
    }
    show(){
        return this.parent() + " and Model is " + this.Model
    }
}

let Car = new Model("BMW",'x7');
console.log(Car.show())