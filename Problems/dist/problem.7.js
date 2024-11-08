"use strict";
{
    //
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        getCarAge(currentYear = new Date().getFullYear()) {
            return currentYear - this.year;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
    //
}
