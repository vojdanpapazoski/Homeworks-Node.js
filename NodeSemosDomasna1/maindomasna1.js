const { temperatureConversion, triagolnik, pravoagolnik, evenOdd } = require('./domasnadelotsoFunkcii.js')
console.log("\n");

console.log(`30°C from Celsius to Fahrenheit is ${temperatureConversion(30, 'celsius', 'fahrenheit')}°F.`);
console.log(`86°F from Fahrenheit to Celsuis is ${temperatureConversion(86, 'fahrenheit', 'celsius')}°C.`);

console.log("\n");

const triangle = triagolnik(5, 6, 7)
console.log(`Area of a triagle is: ${triangle.area}.`);
console.log(`Perimeter of a triagle is: ${triangle.perimeter}.`);

console.log("\n");

const rectangle = pravoagolnik(6, 4);
console.log(`Area of a rectangle is: ${rectangle.area}.`);
console.log(`Perimeter of a triagle is: ${rectangle.perimeter}.`);

console.log("\n");

evenOdd(1);
evenOdd(2);
evenOdd(3);
evenOdd(4);
evenOdd(5);
evenOdd(6);
evenOdd(7);

console.log("\n");