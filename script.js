// Car Constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
    // Call Car constructor using `call` to inherit properties
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Restore constructor reference (since it was overwritten by Object.create)
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

// Example Usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());  // Output: 200

// Verify inheritance
console.log(car instanceof SportsCar); // true
console.log(car instanceof Car); // true



