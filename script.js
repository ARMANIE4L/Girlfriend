document.addEventListener("DOMContentLoaded", function (event) {

    const quotes = [
        'Armanie thinks you are the most beautiful girl ever',
        'Armanie loves you so much',
        'You are the "JOY" of his life',
        "Please don't break Armanie's heart",
        'Let us be the longest lasting couple ever, I do not want to ever break up even in the coming years',
        'Let us be there for each other always',
        'Be open to me always, do not lie about your feelings',
        'Armanie appreciates you sticking with him at all times, not going unnoticed',
        'Armanie gets butterflies in his belly whenever you say you love him',
        'Armanie wants you to be happy always',
        "You are the light that brightens up Armanie's day",
        'Armanie cherishes every moment spent with you',
        "Your smile melts Armanie's heart every time",
        'Armanie is grateful for your love and support',
        'You make Armanie believe in true love',
        'Your presence makes every day more beautiful for Armanie',
        'Armanie is the luckiest person to have you in his life',
        "You are the missing piece of Armanie's heart",
        'Armanie loves you more than words can express',
        'Your love is the reason Armanie wakes up with a smile',
        'You are the reason Armanie believes in happily ever after',
        "Armanie's love for you grows stronger every day",
        'Every moment with you is a treasure for Armanie',
        'Armanie is forever grateful for your love and support',
        "You are the one who makes Armanie's world complete",
        "Armanie's heart beats only for you",
        "Your love fills Armanie's life with joy and happiness",
        "You are the epitome of beauty and grace in Armanie's eyes",
        'Armanie is blessed to have you as his partner in life',
        "Your love has transformed Armanie's life in the most beautiful ways",
      ];

// function getRandomIndex(quotesLength) {
//     return Math.floor(Math.random() * quotes.length)    
// }

let currentIndex = 0;

function displayQuote() {

 let nameInput = document.querySelector('#nameInput').value
 let quoteSpace = document.querySelector('#quote')

  quoteSpace.textContent =  nameInput + ',' + ' ' + quotes[currentIndex]

  quoteSpace.classList.add('show')
  
  currentIndex++
  if (currentIndex >= quotes.length) {
     quoteSpace.innerHTML = "That's all for now " + nameInput + ',' + ' welcome back!' + '<br>' + 'With Love, ARMANIE'
 }
 

}

document.querySelector('#generateButton').addEventListener('click', displayQuote )

})
