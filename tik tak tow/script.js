/*  ----------------------------------------for pratice only --------------------------------------//
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentmode="light";
modebtn.addEventListener ("click",()=>{
    if(currentmode==="light"){
        currentmode="dark"
        body.classList.add("dark");
         body.classList.remove("light");
        //document.querySelector("body").style.backgroundColor="black";
    } else{
        currentmode="light";
        body.classList.add("light");
         body.classList.remove("dark");
       
       // document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentmode);
});*/

//-------------------------------------------------------------------------------------------------------------\\
let boxes =document.querySelectorAll(".box");
let reset_button = document.querySelector("#resetbutton");
let newgamebtn= document.querySelector("#newbutton");
let msgcontainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let turnO = true;//playerx , playery 

let winpattrens =[[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                ];
                const resetgame =()=>{
                    turnO=true;
                    enableboxes();
                    msgcontainer.classList.add("hide");
                }
                boxes.forEach((box)=>{
                    box.addEventListener("click",()=>{
                       if(turnO){
                        box.innerText= "0";
                        turnO= false;
                       }
                       else{
                        box.innerText= "x";
                        turnO=true;
                       }
                       box.disabled=true;
                         checkwinner ();
                            
                        
                    });
                    
                });
                const disableall=() =>{
                    for (let box of boxes){
                        box.disabled =true;
                    }
                };
                const enableboxes=()=>{
                    for(let box of boxes){
                        box.disabled =false;
                        box.innerText=""
                    }
                }
                const showwinner=(winner)=>{
                    msg.innerText=`congratulation, winner is ${winner}`;
                    msgcontainer.classList.remove("hide");
                        disableall();
                };


                const checkwinner=()=>{
                    for (let pattern of winpattrens){
                        let pos1val=  boxes[pattern[0]].innerText;
                            let pos2val =  boxes[pattern[1]].innerText;
                            let pos3val=boxes[pattern[2]].innerText;

                            if(pos1val !="" && pos2val !== "" &&pos3val!== ""){
                                if(pos1val===pos2val && pos2val ===pos3val){
                                    
                                    showwinner(pos1val);
                                }
                            }
                    
                        
                    }
                };
newgamebtn.addEventListener("click",resetgame);
reset_button.addEventListener("click",resetgame)
                



