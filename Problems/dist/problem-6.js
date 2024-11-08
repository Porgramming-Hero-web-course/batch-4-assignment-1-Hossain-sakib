"use strict";
const updateProfile = (profile, update) => {
    return Object.assign(Object.assign({}, profile), update);
};
const myProfile = { name: "Sakib", age: 25, email: "hossain.sakib.x@gmail.com" };
console.log(updateProfile(myProfile, { age: 26 }));
