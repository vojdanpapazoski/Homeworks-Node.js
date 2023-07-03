const fs = require('fs');
const path = require('path');

const parseTemplate = async (template, object = null) => {
    const templatePath = path.join(__dirname, '..', 'views', template);
    let content = await fs.promises.readFile(templatePath, 'utf8');
    if (object) {
        for (property in object) {
            const placeholder = `{{${property}}}`;
            const value = object[property];
            content = content.split(placeholder).join(value);
        }
    }
    return content;
};

const rectangle = async (req, res) => {
    const { length, width } = req.params;
    const rectangleArea = Number(length) * Number(width);
    const rectangleDescription = "This function is for calculating the area of a rectangle";
    const response = await parseTemplate("domasna6.html", { rectangleArea, rectangleDescription });
    res.send(response);
};

const triangle = async (req, res) => {
    const { base, height } = req.params;
    const triangleArea = (1 / 2) * Number(base) * Number(height);
    const triangleDescription = "With this function, we are calculating the area of a triangle";
    const response = await parseTemplate("domasna6.html", { triangleArea, triangleDescription });
    res.send(response);
};

const force = async (req, res) => {
    const { mass, acceleration } = req.params;
    const newton = Number(mass) * Number(acceleration);
    const forceDescription = "With this function, we are calculating the force";
    const response = await parseTemplate("domasna6.html", { newton, forceDescription });
    res.send(response);
};

const kalkulator = async (req, res) => {
    const { op, a, b } = req.params;
    let calculatorResult;
    switch (op) {
        case 'sobiranje':
            calculatorResult = Number(a) + Number(b);
            break;
        case 'odzemanje':
            calculatorResult = Number(a) - Number(b);
            break;
        case 'mnozenje':
            calculatorResult = Number(a) * Number(b);
            break;
        case 'delenje':
            calculatorResult = Number(a) / Number(b);
            break;
        default:
            calculatorResult = 'Unknown operation';
    }

    const calculatorDescription = 'With this function, we created a calculator for basic algebra';
    const response = await parseTemplate("domasna6.html", { calculatorResult, calculatorDescription });
    res.send(response);
};

const konverter = async (req, res) => {
    const { temperatura, vrednost } = req.params;
    let konverterResult;
    switch (temperatura) {
        case 'f2c':
            konverterResult = (Number(vrednost) - 32) / 1.8;
            break;
        case 'c2f':
            konverterResult = Number(vrednost) * 1.8 + 32;
            break;
        default:
            konverterResult = 'Unknown temperature conversion';
    }

    const konverterDescription = 'With this function, we created a temperature converter';
    const response = await parseTemplate("domasna6.html", { konverterResult, konverterDescription });
    res.send(response);
};

const speed = async (req, res) => {
    const { distance, time } = req.params;
    const speedResult = Number(distance) / Number(time);
    const speedDescription = 'With this function, we are calculating the speed';
    const response = await parseTemplate("domasna6.html", { speedResult, speedDescription });
    res.send(response);
};

module.exports = { rectangle, triangle, force, kalkulator, konverter, speed };
