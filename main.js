//!  Main
//  Letters
const letters = 'abcdefghijklmnopqrstuvwxyz'

//  Get Array From Letters
let lettersArray = Array.from(letters)

//  Select Letters Container
let lettersContainer = document.querySelector('.letters')

//  Generate Letters
lettersArray.forEach(letter => {

    //  Create Span
    let span = document.createElement('span')

    //  Create Letter Text Node
    let theLetter = document.createTextNode(letter)

    //  Append The Letter To Span
    span.appendChild(theLetter)

    //  Add Class On Span
    span.className = 'letter-box'

    //  Append Span To The Letters Container
    lettersContainer.appendChild(span)
})

//  object Of Words + Categories
const Words = {
    programming: ['php', 'javascript', 'go', 'scala', 'fortran', 'r', 'mysql', 'python'],
    animes: ['demon_slayer', 'death_Note', 'bleach', 'one_piece'],
    names: ["ahmed" , "mohammed" , "sayed" , "alla"],
    feeling: ['love', 'happy', 'sad', 'funny', 'ignore']
}

//  Get Random Property

let allKeys = Object.keys(Words)

//  Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length) 

//  Catefory
let randomPropName = allKeys[randomPropNumber]

//  Catefory Words
let randomPropValue = Words[randomPropName]

//  Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)

//  Word
let randomVlaueValue = randomPropValue[randomValueNumber]

//  Set Category Info
document.querySelector('.game-info .category span').innerHTML = randomPropName

//  Select Letter Guess Element
let lettersGuessContainer = document.querySelector('.letters-guess')
let lettersAndSpace = Array.from(randomVlaueValue)

//  Create Spans Depend On Word
lettersAndSpace.forEach(letter => {

    //  Create Empty Span
    let emptyspan = document.createElement('span')
    //If Letter Is Space
    if(letter == '_') {

        //  Add Class To The Span
        emptyspan.className= 'with-space'
    }

    //  Append Span To The Letters Guess Container
    lettersGuessContainer.appendChild(emptyspan)
})

//  Select Guess Spans
let guessSpans = document.querySelectorAll('.letters-guess span')

//  Set Wrong Attempts
let wronAttempt = 0

//  Select The Draw Element
let theDraw = document.querySelector('.hangman-draw')

//  Handle Clicking On Letters
document.addEventListener('click', e => {

    //  Set The Chose Status
    let Statue = false

    if(e.target.className == 'letter-box') {

        e.target.classList.add('clicked')

        //  Get Clicked Letter
        let clickedLetter = e.target.innerHTML.toLowerCase()

        //  The Chosen Word
        let chosenWord = Array.from(randomVlaueValue)

        chosenWord.forEach((wordLetter , Wordindex) => {

            //  If The Clicked Letter Equal To One Of The Chosen Word Letter
            if(clickedLetter == wordLetter) {

                //  Set Statu to Correct
                Statue = true

                //  Loop On ALl Guess Spans
                guessSpans.forEach((span,spanIndex) => {

                    if(Wordindex === spanIndex) {

                        span.innerHTML = clickedLetter
                    }
                })
            }
        })

        //!  OutSide Loops
        //  Uf Ketter Is Wrong
        if(Statue !== true) {

            //  Increase The Wrong Attempts
            wronAttempt++

            //  Add Class Wrong On The Draw Element
            theDraw.classList.add(`wrong-${wronAttempt}`)

            if(wronAttempt === 8) {

                endGame()

                lettersContainer.classList.add('finished')
            }
        }
    }

})

//!  Functions
//  End Game Function
function endGame() {

    //  Create popup Div
    let div = document.createElement('div')

    //  Create Text 
    let divText = document.createTextNode(`Game Over, The Word Is ${randomVlaueValue}`)

    //  Append Text To Div
    div.appendChild(divText)

    //  Add Class On Div
    div.className = 'popup'

    //  Append To The Body
    document.body.appendChild(div)
}
