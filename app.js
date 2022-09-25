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
    person: 'Mabe Homophobic'
}, {
    quote: '"Parang naiinlove na ako sa mga ngiti ni classmate bahaha"',
    person: 'Jiki'
}, {
    quote: '"Kung libre mangarap bakit may tuition?"',
    person: 'Pabigat na reklamador'
}, {
    quote: '"Kokopya ka nalang rereklamo ka pa sa sulat ko, nangto"',
    person: 'Classmate na short tempered'
}, {
    quote: '"Kung education is the key, sino naglock?"',
    person: 'Emman baho pota'
}, {
    quote: '"What if crush ko si maam? ahahah pota"',
    person: 'Jim'
}];

// button.addEventListener('click', function () { //himo event listner sa button kag function

//     let random = Math.floor(Math.random() * arrayOfQuotes.length); //amo ni ang formula para mag generate random, i times mo sa array

//     quote.innerText = arrayOfQuotes[random].quote; //ari para maislan tung text nga quote
//     person.innerText = arrayOfQuotes[random].person; //ari para maislan tung text nga person

// })

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