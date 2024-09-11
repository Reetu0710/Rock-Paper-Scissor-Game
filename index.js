let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const drawGame=()=>{    
    msg.innerHTML="Game was draw! Play again."
     msg.style.background="#081b31"

}
const showWinner=(userWin,compChoice,userChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerHTML=`You win!  Your ${userChoice} beat ${compChoice}`
            msg.style.background="green"
        }
        else{
            compScore++;
            compScorePara.innerText=compScore;           
            msg.innerHTML=`You lose! ${compChoice} beat your  ${userChoice}`
             msg.style.background="red"
        }
}

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const val=Math.floor(Math.random()*3); // between 0 and 1 ,values are show
    return options[val];
}

const playGame=(userChoice)=>{
    console.log("User Choice is = " ,userChoice);
    const compChoice=genCompChoice();
    console.log("Computer  Choice is  =" , compChoice);

    if(userChoice===compChoice){
        //Draw the game
        drawGame();
    }
    else{
        let userWin=true;
       if(userWin==="rock")  { //scissor,paper       
     userWin=compChoice==="paper"?false:true;
    }
    else if(userWin=="paper"){ //scissor,rock
        userWin=compChoice==="scissor" ? false:true;
    }
    else{ //rock paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,compChoice,userChoice);
}
}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");       
        playGame(userChoice);
    })
})