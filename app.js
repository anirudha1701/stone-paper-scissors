let userscore = 0;
let computer = 0;

const choise = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomchoice =() =>{
const option = ["rock", "paper", "scissors"];
const randidx = Math.floor(Math.random()*3);
 return option[randidx]
}

const drawgame = () =>{
    
    msg.innerText = `game was draw,`;
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin, userchoise, compchoice) =>{
    if (userwin) {
        userscore++
        userscorepara.innerText = userscore;
        
        msg.innerText = `you win! ${userchoise} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computer++
        compscorepara.innerText = computer;
       
        msg.innerText = `you lost! ${compchoice} beats ${userchoise}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoise) =>{
   console.log("user choise =", userchoise);
   //genrate computer choise
   const compchoice = gencomchoice();
   console.log("comp choice =", compchoice);

   if (userchoise === compchoice) {
     drawgame();
   }
   else{
    let userwin = true;
    if (userchoise === "rock") {
        //scissors, paper
        userwin = compchoice === "paper" ? false : true;
    }
    else if (userchoise === "paper") {
        //scissors, paper
        userwin = compchoice === "scissors" ? false : true;
    }
    else  {
        //rock, paper
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoise, compchoice);
   }
}

choise .forEach((choice) =>{
    
    choice.addEventListener("click", () =>{
        const userchoise = choice.getAttribute("id")
    // console.log("choice was clicked" ,userchoise);
    playgame(userchoise)
    })
})