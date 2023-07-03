const fs = require("fs"); // go importirame file sistem od node.js

const data = '- Ova e tekstot - Moj prv kreiran file <------- '

fs.writeFile('novFile.txt', data, (err) => {
    if (err) {

        console.error('Ima nekade greska pri kreiranjeto na file-ot');
    } else {
        console.log('Fajlot e uspesno kreiran');
    }
});


fs.readFile('novFile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Nastana greska pri citanjeto na file-ot');
    } else {
        console.log(data);
        console.log('Fajlot e uspesno procitan');
    }
});

fs.rename('newData.txt', 'aktuelenFile.txt', (err) => {
    if (err) {
        console.error('Ne moze da se menuva imeto na ovoj File');
    } else {
        console.log('Imeto e uspesno promeneto');
    }
});


fs.appendFile('novFile.txt', '\nDodavame malku poveke tekst vo fajlot', (err) => {
    if (err) {
        console.error('Greska pri vpisuvanje nov tekst !');
    } else {
        console.log('Sodrzinata e uspesno nadgradena');
    }
});


fs.unlink('data.txt', (err) => {
    if (err) {
        console.error('Greska pri brisenjeto na file-ot')
    } else {
        console.log('Fajlot e uspesno izbrisan');
    }
});
