const express = require('express');
const app = express();

const { triangle, force, rectangle, kalkulator, konverter, speed } = require('./controller/calculator');

app.get("/rectangle/:length/:width", rectangle);
app.get("/triangle/:base/:height", triangle);
app.get("/force/:mass/:acceleration", force);
app.get("/kalkulator/:op/:a/:b", kalkulator);
app.get("/konverter/:temperatura/:vrednost", konverter);
app.get("/speed/:distance/:time", speed);

const porta = 10000;
app.listen(porta, (err) => {
    if (err) console.error(err);
    console.log(`Serverot e uspesno startuvan na porta ${porta}`);
});
