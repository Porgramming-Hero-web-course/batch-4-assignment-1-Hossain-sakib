{
  //
  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: "Sakib",
    age: 25,
  };

  const validateKeys = (obj: Person, keys: (keyof Person)[]): boolean => {
    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in obj)) {
        return false;
      }
    }
    return true;
  };

//   console.log(validateKeys(person, ["name", "age"]));
//   console.log(validateKeys(person, ["name", "phone"]));

  //
}
