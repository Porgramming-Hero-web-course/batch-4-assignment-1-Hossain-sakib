{
  //
  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: "sakib",
    age: 25,
  };

  const getProperty = <T, K extends keyof T>(obj: T, property: K): T[K] => {
    return obj[property];
  };

  const nameRes = getProperty(person, "name");
  const ageRes = getProperty(person, "age");
  console.log(nameRes);
  console.log(ageRes);
  //
}
