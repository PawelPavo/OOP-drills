// ========= 5 object literals with name called to the console

console.log('=========== OBJECT LITERALS ==========')

let person1 = {
    name: 'Jan',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person2 = {
    name: 'Kathy',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person3 = {
    name: 'Greg',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person4 = {
    name: 'Max',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person5 = {
    name: 'Stella',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

console.log('================= PSEUDO CLASSES===========')

// ================ Psudeo-class ===================

function InfoData(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

InfoData.prototype.speakHello = function () {
    console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`)
}

let p1 = new InfoData('Jan', 'Ostroleka', 66);
let p2 = new InfoData('Kathy', 'Ostroleka', 38)
let p3 = new InfoData('Greg', 'Hamptons', 38)
let p4 = new InfoData('Max', "Long Beach", 8)
let p5 = new InfoData('Stella', 'Lynbrook', 3)

p1.speakHello();
p2.speakHello();
p3.speakHello();
p4.speakHello();
p5.speakHello();


// =================== ES6 syntax ==================
console.log('================= ES6 SYNTAX ===========')


class Person {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greet(){
        console.log(`What's up! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`)
    }
}

let p11 = new Person('Jan', 'Ostroleka', 66);
let p12 = new Person('Kathy', 'Ostroleka', 38)
let p13 = new Person('Greg', 'Hamptons', 38)
let p14 = new Person('Max', "Long Beach", 8)
let p15 = new Person('Stella', 'Lynbrook', 3)

p11.greet();
p12.greet();
p13.greet();
p14.greet();
p15.greet();


// =========== INHERITANCE ===============

console.log('================= INHERITANCE ===========')

// Creating Parent Class - Vehicle 
class Vehicle {
    constructor(manufactor, wheels){
        this.manufactor = manufactor;
        this.wheels = wheels;
        this.type = 'vehicle';
    }
    aboutVehicle(){
        console.log(`This is a ${this.type}, made by ${this.manufactor}, and it has ${this.wheels} wheels.`)
    }
}

// Creating a vehicle and logging the info to the consloe through Vehicle Class
let car1 = new Vehicle('Toyota', 4)
console.log(car1);
car1.aboutVehicle();


//Creating Chilld Class - Trucks
class Trucks extends Vehicle {
    constructor(manufactor, type, wheels, doors, bed){
        super(manufactor, wheels);
        this.type = type;
        this.doors = doors;
        this.bed = (type === 'truck' ? 'has' : 'does not have');;
    }
    aboutVehicle(){
        console.log(`This is a ${this.type} made by ${this.manufactor}. It has ${this.doors} doors and it ${this.bed} truckbed, because it is a truck. Ohh yeah, it also has ${this.wheels} wheels, like a truck should.`)
    }
}
let car2 = new Trucks ('GMC','truck', 4, 2,)
console.log(car2);
car2.aboutVehicle();

class Sedans extends Vehicle {
    constructor(manufactor, type, wheels, doors, size, mpg, bed){
        super(manufactor, wheels);
        this.type = type;
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
        this.bed = (type === 'truck' ? 'has' : 'does not have');
    }
    aboutVehicle(){
        console.log(`This is a ${this.type} made by ${this.manufactor}. It has ${this.doors} doors and it ${this.bed} truckbed, because it is a ${this.size} sedan. It also has ${this.wheels} wheels and gets ${this.mpg} mpg.`)
    }
}

let car3 = new Sedans ('Honda', 'sedan', 4, 4, 'mid-size', 36)
console.log(car3);
car3.aboutVehicle();


class Motorcycles extends Vehicle {
    constructor (manufactor, type, wheels, steering, doors, reverse){
        super(manufactor, wheels)
        this.type = type
        this.steering = (type === 'motorcycle', this.steering = 'handlebars');
        this.doors = (type === 'motorcycle', this.doors = 0);
        this.reverse = (doors === 0, this.reverse = 'only if you push them');
    }
    aboutVehicle(){
        console.log(`This is a ${this.type} made by ${this.manufactor}. This vehicle has ${this.doors} doors, because it is a ${this.type}. Motorcycles usually have ${this.wheels} wheels, and a set of ${this.steering}. They go in reverse ${this.reverse}!`)
    }

}

let car4 = new Motorcycles ('Suzuki', 'motorcycle', 2)
console.log(car4);
car4.aboutVehicle();

