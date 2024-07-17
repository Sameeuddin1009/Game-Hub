let myScore= 0 ;
let compScore= 0 ;
const uscore=document.querySelector("#myscore");
const cscore=document.querySelector("#compscore");
const msg=document.querySelector("#msg");
const options = document.querySelectorAll(".option");
options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userOption=option.getAttribute("id");
        play(userOption);
    });
});
const compChoice=()=>{
    const choice=["rock","paper","scissor"];
    const ranIndx=Math.floor(Math.random() *3);
    return choice[ranIndx];
};
const winner=(userWin)=>{
    if(userWin)
    {
        myScore++;
        uscore.innerText=myScore;
        msg.innerText='You win! ';
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        cscore.innerText=compScore;
        msg.innerText='You lost';
        msg.style.backgroundColor="red";

    }
};

const play=(userOption)=>{
    console.log("user choice",userOption);
    const compOption=compChoice();
    console.log("computer choice",compOption);
    if(userOption === compOption)
    {
        console.log("game was draw");
        msg.innerText="Game was draw. Play again";
        msg.style.backgroundColor="#878796";
    }else{
        let userWin=true;
        if(userOption ==="rock"){
            userWin=compOption ==="paper" ?false:true;
        }
        else if(userOption ==="paper"){
            userWin=compOption ==="scissor" ?false:true;
        }
        else{
            userWin=compOption ==="rock" ?false:true;
        }
        winner(userWin);
    }
};
