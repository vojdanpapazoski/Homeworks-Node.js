//? Domasna
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)
//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
//? 4. Vkupen prosek na studenti koi se od Kumanovo
//? 5. Prosek na prosecite od gradoovite Skopje i Ohrid
//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo
//? 7.Da se izbrishe prviot student vo studentite
//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)

const studenti = [
    { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
    { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
    { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
    { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
    { ime: "Simona", prosek: 7, grad: "Ohrid" },
    { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
    { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
    { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
    { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
];


//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)


const zavrsuvanaA = studenti
    .filter((student) => student.grad === 'Skopje' && student.ime.endsWith('a') && student.prosek > 7)

console.log(zavrsuvanaA);

//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki


const neSeOdSk = studenti
    .filter((student) => student.grad !== 'Skopje' && student.prosek > 9)
    .sort((a, b) => b.prosek - a.prosek);

console.log(neSeOdSk);


//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek

const prvite3 = studenti
    .filter((student) => student.ime.length === 5)
    .sort((a, b) => b.prosek - a.prosek);

console.log(prvite3);

//? 4. Vkupen prosek na studenti koi se od Kumanovo

const kumanovskiProsek = studenti
    .filter((student) => student.grad === 'Kumanovo')
    .reduce((acc, curr) => acc + curr.prosek, 0);
console.log(kumanovskiProsek.toFixed(2));


//? 5. Prosek na prosecite od gradoovite Skopje i Ohrid

const skopjani = studenti
    .filter((student) => student.grad === 'Skopje')
const ohrigjani = studenti
    .filter((student) => student.grad === 'Ohrid')

const studenitiOdOhiSk = skopjani.concat(ohrigjani)
const prosekOHISK = studenitiOdOhiSk.reduce((acc, curr) => acc + curr.prosek, 0)
const kraenProsek = prosekOHISK / studenitiOdOhiSk.length
console.log(kraenProsek.toFixed(2));


//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo

const Goran4e = { ime: 'Goran', prosek: 7.3, grad: 'Delcevo' }
studenti.push(Goran4e)
console.log(studenti);

//? 7.Da se izbrishe prviot student vo studentite

studenti.shift()
console.log(studenti);


//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo 
//? prosecite im se za 1 pogolemi od segasnite(dinamicki)

const studentiOH = studenti.filter((student) => student.grad === 'Ohrid')
const studentiSK = studenti.filter((student) => student.grad === 'Kumanovo')
const zaednicki = studentiOH.concat(studentiSK);
const dinamicka = zaednicki.map(student => {
    return {
        ...student,
        prosek: student.prosek + 1,
    };
});
console.log(dinamicka);

