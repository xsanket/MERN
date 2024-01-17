let userScore=0;
let aiScore=0;


const choices = document.querySelectorAll(".c1");
const msg = document.querySelector("#msg");

//to update score
const userScorePara = document.querySelector("#your-score");
const aiScorePara = document.querySelector("#AI-score");

//to generate ai choice
const genAiChoice=()=>{
    const options =["rock","paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex]
}

//draw game
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };



  const showWinner = (userWin, userChoice, aiChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${aiChoice}`;
      msg.style.backgroundColor = "green";
    } else {
        aiScore++;
     aiScorePara.innerText = aiScore;
      msg.innerText = `You lost. ${aiChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };





//Actual game
const playGame =(userChoice) =>{
    console.log("user choice "+ userChoice);
    const aiChoice = genAiChoice();
    console.log("ai choice was "+ aiChoice);

    if (userChoice === aiChoice) {
        drawGame();
      } 
      else 
      {
        let userWin = true;
        
        if (userChoice === "rock") {
          
          userWin = aiChoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") {
         
          userWin = aiChoice === "scissors" ? false : true;
        } 
        else {
          
          userWin = aiChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, aiChoice);
      }
    };






// to get clicked choice(user choice)
choices.forEach((c1)=>{
    c1.addEventListener("click",()=>{

        //to get the clicked choice
        const userChoice=c1.getAttribute("id");
        playGame(userChoice);
    })

})

