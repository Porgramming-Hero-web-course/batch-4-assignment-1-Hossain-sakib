{
  //
  class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }

    getCarAge(currentYear: number = new Date().getFullYear()): number {
      return currentYear - this.year;
    }
  }
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
  //
}
