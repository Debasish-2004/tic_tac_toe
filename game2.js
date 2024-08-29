let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset_game");

let turn0 = true;

const winPattern = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
box.forEach((box) =>{
    box.addEventListener("click",() =>{      
        if(turn0){
            box.innerText = "X";
            turn0 = false;
        }
        else{
            box.innerText = "O";
            turn0 = true
        }
        box.disabled = true;
        checkWinner();
    });
});
const checkWinner = () =>{
    for(let pattern of winPattern)
    {
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;
       
        if(pos1val != "" && pos2val != "" && pos3val != "" )
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                reset.innerText =` WINNER is ${pos1val}`;
                for(let boxes of box){
                    boxes.disabled = true;
                }
            }
        }
    }
}
