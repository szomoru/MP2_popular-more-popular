let searchVolumeArray = [];

let newGameArray = [];
let winnerName, userAnswer;

document.addEventListener("DOMContentLoaded", function () {
   /* --- check if everything is loaded and listen if the Start New Game button is clicked ---*/
   newGame();
   document.getElementById("startBtn").addEventListener("click", newGame);
})

function fillSearchVolumeArray() {
   for (let i = 0; i < 20; i++) {
      searchVolumeArray.push(Math.floor(Math.random()*1E6));
   }
   console.log(searchVolumeArray);
}

function addSearchVolume() {
   /* --- Fill up the search Volume object value in the Database array ---*/
   for (let i = 0; i < 20; i++) {
      dataBaseArray[i]["searchVolume"] = searchVolumeArray[i];
      console.log(dataBaseArray[i].searchVolume);
   }
}

function newGame() {
   /* --- This function is the main function and executed when the user clicks on the Start New Game button ---*/
   document.getElementById("questionNumber").innerText = 0;
   document.getElementById("correctAnswerNr").innerText = 0;
   document.getElementById("wrongAnswerNr").innerText = 0;
   fillSearchVolumeArray();
   addSearchVolume(); /* --- calling addSearchVolume function ---*/
   shuffleArray(); /* --- calling shuffleArray function ---*/
   newGameArray = new Array; /* --- define the array as new that will contain the comp pairs from the shuffled array. by defining as new array makes it happen that every time when the user clicks (Start game button the game array brand new) ---*/

   for (let j = 0; j < arrayToShuffle.length; j += 2) {
      /* --- From the shuffled array creates the game array, which contains 10 2 elements array ---*/
      newGameArray.push([dataBaseArray[arrayToShuffle[j]], dataBaseArray[arrayToShuffle[j + 1]]]); /* --- create the new game array from shuffled array  ---*/
   }
   console.log(newGameArray);
   updateGameArea();
}

function shuffleArray() {
   /* --- This function randomly shuffle my basic array ---*/
   arrayToShuffle = new Array; /* --- define the array that will be shuffled ---*/
   let arrayToShuffleLength = 20;

   for (let i = 0; i < arrayToShuffleLength; i++) {
      /* --- creates the array that will be shuffled ---*/
      arrayToShuffle[i] = i;
   }

   for (let x = arrayToShuffle.length - 1; x > 0; x--) {
      /* --- shuffle the created array according to the Fisher-Yates algorithm ---*/
      let y = Math.floor(Math.random() * (x + 1));
      const temp = arrayToShuffle[x];
      arrayToShuffle[x] = arrayToShuffle[y];
      arrayToShuffle[y] = temp;
   }
   console.log(arrayToShuffle);
}

function createQuestionCard(user) {
   /* --- This function fetching the object values into the HTML content of the comp-section  ---*/
   return `
         <p class="info-panel-name"><strong>Name: </strong><span id="name" name_id="${user.name}">${user.name}</span></p>
         <p class="info-panel-prof"><strong>Profession: </strong>${user.profession}</p>
         <p class="info-panel-dob"><strong>Date of birth: </strong>${user.dateOfBirth}</p>
         <p class="info-panel-pob"><strong>Place of birth: </strong>${user.placeOfBirth}</p>
         <p class="info-panel-mi"><strong>More info:</p> <p class="info-panel-wiki"></strong><a href="${user.info}"  target="_blank">Wikipedia</a></p>`

}

function updateGameArea() {
   document.getElementById("comp-section-left").style.pointerEvents = 'auto';
   document.getElementById("comp-section-right").style.pointerEvents = 'auto';
   resetLayer();
   console.log("The number of the question is: " + incrementNrOfQuestion());
   if (nrOfQuestion == 11) {
      endGame();
   } else {
      /* --- This function updating the HTML elements in the comp-section---*/

      let compSectionLeftImg = document.getElementById("compImgLeft");
      compSectionLeftImg.setAttribute("src", newGameArray[nrOfQuestion - 1][0].pictureLocation);
      compSectionLeftImg.setAttribute("alt", newGameArray[nrOfQuestion - 1][0].name);
      let compSectionLeft = document.getElementById("infoSectLeft");
      compSectionLeft.innerHTML = createQuestionCard(newGameArray[nrOfQuestion - 1][0]);

      let compSectionRightImg = document.getElementById("compImgRight");
      compSectionRightImg.setAttribute("src", newGameArray[nrOfQuestion - 1][1].pictureLocation);
      compSectionRightImg.setAttribute("alt", newGameArray[nrOfQuestion - 1][1].name);
      let compSectionRight = document.getElementById("infoSectRight");
      compSectionRight.innerHTML = createQuestionCard(newGameArray[nrOfQuestion - 1][1]);

      calculateCorrectAnswer();
      console.log("The calculated correct answer: " + calculateCorrectAnswer());
   }

}

function calculateCorrectAnswer() {
   /* --- This function comparing the values of the searchVolume object key and fetching the name object key values. By this it calculates who id the winner of the comaprisation ---*/
   if (newGameArray[nrOfQuestion - 1][0].searchVolume > newGameArray[nrOfQuestion - 1][1].searchVolume) {
      winnerName = newGameArray[nrOfQuestion - 1][0].name;
   } else {
      winnerName = newGameArray[nrOfQuestion - 1][1].name;
   }
   return winnerName;

}

function userAnswerLeft() {
   document.getElementById("comp-section-left").style.pointerEvents = 'none';
   userAnswer = newGameArray[nrOfQuestion - 1][0].name;
   console.log("The selected user answer: " + userAnswer);
   checkAnswer();
}

function userAnswerRight() {
   document.getElementById("comp-section-right").style.pointerEvents = 'none';
   userAnswer = newGameArray[nrOfQuestion - 1][1].name;
   console.log("The selected user answer: " + userAnswer);
   checkAnswer();
}

function checkAnswer() {
   if (userAnswer == winnerName) {
      incrementScoreCorrect();
      if (userAnswer == document.getElementById("compImgLeft").getAttribute("alt")) {
         $("#layerL").removeClass("layer-left");
         $("#layerL").addClass("layer-correct");
      } else if (userAnswer == document.getElementById("compImgRight").getAttribute("alt")){
         $("#layerR").removeClass("layer-right");
         $("#layerR").addClass("layer-correct");
      }
      setTimeout(updateGameArea, 200);
      
   } else if (userAnswer != winnerName) {
      
      incrementScoreWrong();
      if (userAnswer == document.getElementById("compImgLeft").getAttribute("alt")) {
         $("#layerL").removeClass("layer-left");
         $("#layerL").addClass("layer-wrong");
      } else if (userAnswer == document.getElementById("compImgRight").getAttribute("alt")){
         $("#layerR").removeClass("layer-right");
         $("#layerR").addClass("layer-wrong");
      }
      setTimeout(updateGameArea, 200);
   }
}

function incrementNrOfQuestion() {
   /* --- This function increase the nrOfQuestion variable by 1 ---*/
   let oldQuestionNr = parseInt(document.getElementById("questionNumber").innerText);
   nrOfQuestion = document.getElementById("questionNumber").innerText = ++oldQuestionNr;
   return nrOfQuestion;
}

function incrementScoreCorrect() {
   /* --- When this function is called it fetches the old CORRECT answer score value and increase it by 1 ---*/
   let oldScoreCorrect = parseInt(document.getElementById("correctAnswerNr").innerText);
   console.log(oldScoreCorrect);
   document.getElementById("correctAnswerNr").innerText = ++oldScoreCorrect;
}

function incrementScoreWrong() {
   /* --- When this function is called it fetches the old WRONG answer score value and increase it by 1 ---*/
   let oldScoreWrong = parseInt(document.getElementById("wrongAnswerNr").innerText);
   console.log(oldScoreWrong);
   document.getElementById("wrongAnswerNr").innerText = ++oldScoreWrong;
}

function endGame() {
   if (document.getElementById("correctAnswerNr").innerText >= document.getElementById("wrongAnswerNr").innerText) {
      let modal = document.getElementById("modalWinner");
      modal.style.display = "block";
      let finalCorrectAnswer = document.getElementById("correctAnswerNr").innerText;
      console.log(finalCorrectAnswer);
      document.getElementById("modalCorrectAnswerWinner").innerText = finalCorrectAnswer;
      let finalWrongAnswer = parseInt(document.getElementById("wrongAnswerNr").innerText);
      console.log(finalWrongAnswer);
      document.getElementById("modalWrongAnswerWinner").innerText = finalWrongAnswer;
      document.getElementById("modalCloseWinner").addEventListener("click", function(){
         modal.style.display = "none";
         newGame();
      });
   } else {
      let modal = document.getElementById("modalLoser");
      modal.style.display = "block";
      let finalCorrectAnswer = document.getElementById("correctAnswerNr").innerText;
      console.log(finalCorrectAnswer);
      document.getElementById("modalCorrectAnswerLoser").innerText = finalCorrectAnswer;
      let finalWrongAnswer = parseInt(document.getElementById("wrongAnswerNr").innerText);
      console.log(finalWrongAnswer);
      document.getElementById("modalWrongAnswerLoser").innerText = finalWrongAnswer;
      document.getElementById("modalCloseLoser").addEventListener("click", function(){
         modal.style.display = "none";
         newGame();
      });
   }
}

function resetLayer() {
   if (document.getElementById("layerL").getAttribute("class") == "layer-wrong")  {
      $("#layerL").removeClass("layer-wrong");
      $("#layerL").addClass("layer-left");
   } else if (document.getElementById("layerL").getAttribute("class") == "layer-correct") {
      $("#layerL").removeClass("layer-correct");
      $("#layerL").addClass("layer-left");
   }

   if (document.getElementById("layerR").getAttribute("class") == "layer-wrong")  {
      $("#layerR").removeClass("layer-wrong");
      $("#layerR").addClass("layer-right");
   } else if (document.getElementById("layerR").getAttribute("class") == "layer-correct") {
      $("#layerR").removeClass("layer-correct");
      $("#layerR").addClass("layer-right");
   }
}


/*

// Get the modal


var modal = document.getElementById("modal-winner");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/