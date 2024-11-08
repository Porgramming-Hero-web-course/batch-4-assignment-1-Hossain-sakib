"use strict";
{
    const person = {
        name: "Sakib",
        age: 25,
    };
    const validateKeys = (obj, keys) => {
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
