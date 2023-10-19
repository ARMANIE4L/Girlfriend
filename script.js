document.addEventListener("DOMContentLoaded", function (event) {


let currentIndex = 0;

function displayQuote(event) {

 let quoteSpace = document.querySelector('#quote')
 let nameInput = document.querySelector('#nameInput').value

 // LEARN AJAX FROM HERE
 const xhr = new XMLHttpRequest();
 xhr.open('GET', './quotes.json', true);
 xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const quotes = JSON.parse(xhr.responseText);

            if (currentIndex < quotes.length) {
            let message = nameInput + ',' + ' ' + quotes[currentIndex]

            quoteSpace.textContent = message 
           
            quoteSpace.classList.add('show')
            currentIndex++                

            } else {
                quoteSpace.innerHTML = "That's all for now " + nameInput + ',' + ' welcome back!' + '<br>' + 'With Love, ARMANIE'

            }

        } else {
            console.log('Error:', xhr.status)
            quoteSpace.textContent = 'Failed to fetch quote.'
            quoteSpace.classList.add('show')
        }
    }
 }
 

 // make an ajax GET request to fetch thr JSON file


 xhr.send()
 
 }
 
 // trying to change the button text after being clicked once
function updateButtonText(event) {
    let generateButton = document.querySelector('#generateButton')
    let nameInput = document.querySelector('#nameInput').value
    generateButton.textContent = 'Click Again ' + nameInput + '!'
}

function lastButtonClick(event) {
        let generateButton = document.querySelector('#generateButton')
        let nameInput = document.querySelector('#nameInput').value
        generateButton.textContent = 'Final Click ' + nameInput + '!'
}

document.querySelector('#generateButton').addEventListener('click', function generateButtonClickHandler() {
    displayQuote();
    if (currentIndex >= 0) {
        updateButtonText()
    }
    if (currentIndex === 29) {
        lastButtonClick()
    }
    if (currentIndex === 30) {
        lastButtonClick()
    }
}
)

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        displayQuote()
        if (currentIndex === 0) {
           updateButtonText() 
        }
    }
}

document.querySelector('#nameInput').addEventListener('keydown', handleKeyPress)

})
