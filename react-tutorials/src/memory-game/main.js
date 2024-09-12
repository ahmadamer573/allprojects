document.querySelector(".control-buttons span").addEventListener("click", function() {
    let yourName = prompt("What's your name");
    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = "Unknown";
    } else {
        document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-buttons").remove();  
});
/*     ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,          */


let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-block");

let blocks = Array.from(blocksContainer.children);

let orderRange = Array.from(Array(blocks.length).keys());

shuffle(orderRange);

blocks.forEach((block, index) => {

  block.style.order = orderRange[index];//اظاف  كلاس اوردر  للداتا

  block.addEventListener("click", function() {

    flipBlock(block);
    });
});

function flipBlock (selectedBlock){//

    selectedBlock.classList.add('is-rotate');

    let allRotatedBlocks = blocks.filter(rotatedBlock => rotatedBlock.classList.contains('is-rotate'));

    if (allRotatedBlocks.length === 2){
        noClicking();

        checkedMatchedBlocks(allRotatedBlocks[0],allRotatedBlocks[1]);
    }
}

function noClicking(){
    blocksContainer.classList.add('no-clicking');
    setTimeout(()=>{
        blocksContainer.classList.remove('no-clicking');
    },duration)
}


function checkedMatchedBlocks(block1 , block2){
    let wrongTries = document.querySelector('.tries span');

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
        },duration);
        document.getElementById('fail').play();
    }
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}