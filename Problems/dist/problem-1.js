"use strict";
{
    //
    const sumArray = (numbers) => {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    };
    const res = sumArray([10, 20, 30, 40,]);
    console.log(res);
    //
}
