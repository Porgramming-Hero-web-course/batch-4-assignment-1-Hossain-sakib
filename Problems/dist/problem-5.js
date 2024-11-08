"use strict";
{
    const person = {
        name: "sakib",
        age: 25,
    };
    const getProperty = (obj, property) => {
        return obj[property];
    };
    const nameRes = getProperty(person, "name");
    const ageRes = getProperty(person, "age");
    console.log(nameRes);
    console.log(ageRes);
    //
}
