// variable
let button = document.getElementsByClassName('random');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let heart = document.querySelector('#heart');

// array of quotes

const arrayOfQuotes = [{
    quote: '"Bakit pa ako magsstudy kung nakapagstudy naman yung seatmate ko? "',
    person: 'Anonymous'
}, {
    quote: '"Mas mabuti nang absent kaysa mainlove sa classmate ahahhaah"',
    person: 'Mabe'
}, {
    quote: '"Parang naiinlove na ako sa mga ngiti ni classmate bahaha"',
    person: 'Jiki'
}, {
    quote: '"Kung libre mangarap bakit may tuition?"',
    person: 'Secret'
}, {
    quote: '"Kokopya ka nalang rereklamo ka pa sa sulat ko, nangto"',
    person: 'Classmate'
}, {
    quote: '"Kung education is the key, sino naglock?"',
    person: 'Emman'
}, {
    quote: '"What if crush ko si maam? ahahah pota"',
    person: 'Jim'
}, {
    quote: '"Mabe ❤️ Shine"',
    person: 'Joshua'
}, {
    quote: '"Kapag kumain ako ng happy meal, sasaya na ba ako?"',
    person: '~'
}, {
    quote: '"Kung magiging subject ka sa school, gusto ko ikaw ang PINAKAMAHIRAP para lagi sayo ako BABAGSAK."',
    person: '~'
}, {
    quote: '"bagaag nawng anang ga relax nga college oi"',
    person: '~'
}, {
    quote: '"Daming formula sa arithmetic naguguluhan na ako kung gusto mo ba ako',
    person: '~'
}];

// random button
for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        let random = Math.floor(Math.random() * arrayOfQuotes.length);

        quote.innerText = arrayOfQuotes[random].quote;
        person.innerText = arrayOfQuotes[random].person;
    })
}

// turn red button

heart.addEventListener('click', function () {
    this.classList.toggle('turnRed');
})