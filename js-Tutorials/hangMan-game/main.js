const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letters =>{
    let span = document.createElement("span");

    let theLetter = document.createTextNode(letters);

    span.appendChild(theLetter);

    span.className = "letter-box";

    lettersContainer.appendChild(span);
});
const words ={
    programming:["php","javascript","go","scala","fortran","r","mysql","python"],
    movies:["Prestige","Inception","Parasite","Interstellar","Whiplash","Memento","Coco","Up"],
    people:["Ahmad amer","Mohammad amer","Omar","Ali","Shareef","Amer","Ammar"],
    countries:["Syria","Palestine","Jordan","Egypt","Qatar","Bahrain","Amman","Lebanon"]
}

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random()* allKeys.length);

let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random()*randomPropValue.length);

let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach(letter=>{
    let span = document.createElement('span');

    if(letter == " "){
        span.className = "with-space";
    }
    lettersGuessContainer.appendChild(span);

});

let guessSpans = document.querySelectorAll(".letters-guess span"); 

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener('click',(e)=>{
    let theStatus = false;

    if(e.target.className === 'letter-box'){
        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(randomValueValue.toLowerCase());
        
        theChosenWord.forEach((wordLetter , WordIndex)=>{

            if(theClickedLetter == wordLetter){
                theStatus = true;
                guessSpans.forEach((span,spanIndex)=>{
                    if(WordIndex === spanIndex){
                        span.innerHTML = theClickedLetter;
                    }
                });

            }
        });
    
        if(theStatus !== true){
            wrongAttempts++;

            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // document.getElementById("fail").play();

            if(wrongAttempts == 8){
                endGame();

                lettersContainer.classList.add("finished");
            }
        }else{
            // document.getElementById("success").play();

        }
    }
});

function endGame(){
    let div = document.createElement('div');

    let divText = document.createTextNode(`game over , the word is ${randomValueValue}`);

    div.appendChild(divText);

    div.className = "popup";

    document.body.appendChild(div);
}