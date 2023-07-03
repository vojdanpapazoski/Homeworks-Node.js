const express = require('express');
const app = express();
// --------------------------------



app.get('/', (req, res) => {
    res.send('Forma za validacija na imeto')
})

app.get('/vnesiime', (req, res) => {
    res.send('Posle znakot / vnesete go vaseto ime')
})




app.get('/vnesiime/:name', (req, res) => {
    const { name } = req.params;

    if (!name) {
        res.send('Invalid URL');
        return;
    }

    console.log('ime', name);

    const samoglaski = ["a", "e", "i", "o", "u"];
    const brojNabukvi = name.length;
    const eParen = brojNabukvi % 2 === 0 ? "da" : "ne";
    let samBroj = 0;

    const bukviArray = name.split("");

    for (let i = 0; i < bukviArray.length; i++) {
        if (samoglaski.includes(bukviArray[i])) {
            samBroj++;
        }
    }

    const sogBroj = brojNabukvi - samBroj;

    res.end(
        `
        ____________________________________

        Imeto ima ${brojNabukvi} karakteri,
        ____________________________________

        Imeto e parno:  ${eParen}, 
        ____________________________________

        Broj na Soglaski  ${sogBroj},       
        ____________________________________
        
        Broj na Samoglaski ${samBroj}
        ____________________________________
        `
    );

});




app.listen(5500, (err) => {
    if (err) {
        console.error('Error has occured', err);
    }
    else {
        console.log('Server is listening on port 5500');
    }
})
