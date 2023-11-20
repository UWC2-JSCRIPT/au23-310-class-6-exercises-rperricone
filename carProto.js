/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model
    }
    accelerate() {
        this.currentSpeed++;
    }
    brake(){
        this.currentSpeed--;
    }
    toString() {
        return `Car model ${this.model} has a current speed of ${this.currentSpeed}`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const jeep = new Car('Jeep');

jeep.accelerate();
jeep.accelerate();
jeep.brake();
console.log(jeep.toString());
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Radio{
    constructor(){
    this.on = false

    }
    isOn(){
        console.log("radio ison?:"+this.on)
        return this.on
    }
    switchOn(on){
        console.log("switching car radio:"+on)
        this.on = on
        
    }
}
class Electric extends Car{
    constructor(model){
        super(model)
        this.motor = "electric"
        this.radio = new Radio()

    }
    isRadioOn(){
        return this.radio.isOn()
    }
    switchOnRadio(on){
     return this.radio.switchOn(on)
    }
    accelerate(){
        super.accelerate()// 1
        super.accelerate()// 2
    }
    toString() {
        return `This really cool electric car ${this.model} has a current speed of ${this.currentSpeed}`;
    }
}

const tesla = new Electric('Tesla');

tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(tesla.toString());
tesla.isRadioOn()
tesla.switchOnRadio(true)
tesla.isRadioOn()

