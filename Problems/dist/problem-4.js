"use strict";
{
    const calculateArea = (item) => {
        if (item.shape === "circle") {
            const circleArea = Math.PI * item.radius * item.radius;
            return circleArea;
        }
        else if (item.shape === "rectangle") {
            const rectangleArea = item.width * item.height;
            return rectangleArea;
        }
        else {
            return 0;
        }
    };
    const circle1Area = calculateArea({ shape: "circle", radius: 10 });
    console.log(`Area is ${circle1Area} square units`);
    const rectangle1Area = calculateArea({ shape: "rectangle", width: 40, height: 60 });
    console.log(`Area is ${rectangle1Area} square units`);
    //
}
