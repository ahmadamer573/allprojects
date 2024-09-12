// import { Fragment, useState } from "react";
// import GameBlock from "./components/GameBlock";
// import { data } from "./data";
// import "./style.css";
// export default function MemoryGame() {
//   const [name, setName] = useState("");
//   const [start, setStart] = useState(true);
//   const [click, setClick] = useState(true);
//   const [isRotate, setIsRotate] = useState(false);
//   const [wrongTries, setWrongTries] = useState(0);
//   const [isMatched, setIsMatched] = useState(false);

//   const duration = 1000;
/*start game */
// function whatsYourName() {
//   const yourName = prompt("What's your name");
//   if (yourName === null || yourName === "") {
//     setName("Unknown");
//   } else {
//     setName(yourName);
//   }
//   shuffle(data);
//   setStart(false);
// }
//   function noClicking() {
//     setClick(false);
//     setTimeout(() => {
//       setClick(true);
//     }, duration);
//   }
//   function checkedMatchedBlocks(block1, block2) {
//     if (block1.dataTechnology === block2.dataTechnology) {
//       setIsRotate(false);
//       setIsMatched(true);
//     } else {
//       setWrongTries(wrongTries + 1);
//       setTimeout(() => {
//         setIsRotate(false);
//       }, duration);
//     }
//   }

//   function flipBlock(selectedBlock) {
//     setIsRotate(true);
//     let allRotatedBlocks = card.filter((rotatedBlock) => setIsRotate(true));

//     if (allRotatedBlocks.length === 2) {
//       noClicking();

//       checkedMatchedBlocks(allRotatedBlocks[0], allRotatedBlocks[1]);
//     }
//   }
//   /* shuffle */
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]]; // Swap elements
//     }
//     return array;
//   }

//   /*         map data       */
//   const card = data.map((el, index) => (
//     <GameBlock
//       onClick={flipBlock}
//       isRotate={isRotate && "is-rotate"}
//       isMatched={isMatched && "is-matched"}
//       img={el.img}
//       dataTechnology={el.dataTechnology}
//       key={index}
//     />
//   ));
// return (
//   <Fragment>
//     {start && (
//       <div className="control-buttons">
//         <span onClick={whatsYourName}>Start Game</span>
//       </div>
//     )}
//     <div className="info-container">
//       <div className="name">Hello: {name}</div>
//       <div className="tries">Wrong Tries: {wrongTries}</div>
//     </div>
//     <div
//       // className={"memory-game-block" && click && "no-clicking"}>
//      className={"memory-game-block"}>
//       {card}
//     </div>
//   </Fragment>
// );
// }
import React, { useState } from "react";
import "./style.css"; // Import your CSS file

const MemoryGame = () => {
  const [name, setName] = useState("");
  const [wrongTries, setWrongTries] = useState(0);

  const flipBlock = (selectedBlock) => {

      selectedBlock.classList.add('is-rotate');
  
      let allRotatedBlocks = blocks.filter(rotatedBlock => rotatedBlock.classList.contains('is-rotate'));
  
      if (allRotatedBlocks.length === 2){
  
          checkedMatchedBlocks(allRotatedBlocks[0],allRotatedBlocks[1]);

  }
  };

  const checkedMatchedBlocks = (block1, block2) => {
    if (block1.dataset.technology === block2.dataset.technology){
      block1.classList.remove('is-rotate');
      block2.classList.remove('is-rotate');
      
      block1.classList.add('is-matched');
      block2.classList.add('is-matched');

      document.getElementById('success').play();
  }
  else{
      wrongTries.innerHTML = parseInt(wrongTries.innerHTML)+1;
      setTimeout(()=>{  
      block1.classList.remove('is-rotate');
      block2.classList.remove('is-rotate');
      },1000);
      document.getElementById('fail').play();
  }  };

  return (
    <div>
      {!name ? (
        <div className="control-buttons">
          <span
            onClick={() => {
              const playerName = prompt("What's your name");
              setName(playerName || "Unknown");
            }}>
            Start Game
          </span>
        </div>
      ) : null}

      <div className="info-container">
        <div className="name">
          Hello: <span>{name}</span>
        </div>
        <div className="tries">
          Wrong Tries: <span>{wrongTries}</span>
        </div>
      </div>
      <div className="memory-game-block">
        <div class="game-block" data-technology="java">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/java-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="java">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/java-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="dart">
          <div class="face front"></div>
          <div class="face back">
            <img
              class="logo"
              src="./img/dart-programming-language-seeklogo.com.svg"
              alt=""
            />
          </div>
        </div>
        <div class="game-block" data-technology="dart">
          <div class="face front"></div>
          <div class="face back">
            <img
              class="logo"
              src="./img/dart-programming-language-seeklogo.com.svg"
              alt=""
            />
          </div>
        </div>
        <div class="game-block" data-technology="python">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/python-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="python">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/python-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="c">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/c-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="c">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/c-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="css">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/css3-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="css">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/css3-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="swift">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/swift-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="swift">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/swift-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="typeScript">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/typescript-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="typeScript">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/typescript-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="js">
          <div class="face front"></div>
          <div class="face back">
            <img
              class="logo"
              src="./img/javascript-js-seeklogo.com.svg"
              alt=""
            />
          </div>
        </div>
        <div class="game-block" data-technology="js">
          <div class="face front"></div>
          <div class="face back">
            <img
              class="logo"
              src="./img/javascript-js-seeklogo.com.svg"
              alt=""
            />
          </div>
        </div>
        <div class="game-block" data-technology="kotlin">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/kotlin-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="kotlin">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/kotlin-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="php">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/php-seeklogo.com.svg" alt="" />
          </div>
        </div>
        <div class="game-block" data-technology="php">
          <div class="face front"></div>
          <div class="face back">
            <img class="logo" src="./img/php-seeklogo.com.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
