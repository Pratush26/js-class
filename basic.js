//  utity or a base class
class Car {
    constructor(name,color){    //  it will run will this is called
        // this.name = name;
        console.log("This is", color, name)
    }
    //  method
    horn(){
        console.log(`${this.name} is horning`)  //  this use to get the parent....
    }
}
let car1 = new Car("Corola","meron")
console.log(car1 instanceof Car)

//-----------------------------------------------------
//  inheritance
class SportsCar extends Car{    
    constructor(name, color, spoiler){
        super(name,color)
    }
    stund(){
        console.log("can drift")
    }
}

class OffroadCar extends Car{
    constructor(name, color){
        super(name,color)
    }
    offroad(){
        console.log("4*4")
    }
}

let car2 = new SportsCar("BMW", "black","sharp")
let car3 = new SportsCar("Fortuner", "white")

console.log(OffroadCar instanceof Car)  //  false
console.log(car2 instanceof Car)    //  true

car2.horn()