//? Za domasna da se dodade uste eden modul so ime domasna.js
//? Koj kje ima funkcija da promeni faregajt vo celzius i obrantno
//? Da ima funkcija sto presmetuva plostina i perimetar na triagolnik
//? da ima funkcija sto presmetuva plostina i perimetar na pravoagolnik
//? Da ima funkcija sto proveruva dali nekoj broj e parel ili neparen

const temperatureConversion = (temperature, fromUnit, toUnit) => {
    if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        return (temperature - 32) * 5 / 9;
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        return temperature / 5 * 9 + 32;
    } else {
        return 'Unknown conversion'
    }
}

// Herons's formula 
const triagolnik = (a, b, c) => {
    //s- polu-perimetar
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    const perimeter = a + b + c;

    return { area, perimeter };
};

const pravoagolnik = (length, width) => {
    const area = length * width;
    const perimeter = 2 * (length + width);

    return { area, perimeter };
};

//? Da ima funkcija sto proveruva dali nekoj broj e parel ili neparen

const evenOdd = (number) => {
    if (number % 2 === 0) {
        console.log(`The ${number} is EVEN`);
    } else {
        console.log(`The ${number} is ODD`);
    }
};

module.exports = {
    temperatureConversion, triagolnik, pravoagolnik, evenOdd
}