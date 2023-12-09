let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.setAttribute("disabled", true);
        winner();
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes = () => {
    for (box of boxes) {
        box.setAttribute("disabled", true);
    }
};

const enableboxes = () => {
    for (box of boxes) {
        box.removeAttribute("disabled");
        box.innerText = "";
    }
};

const winner = () => {
    for (let pattern of winpatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showwinner(pos1);
            }
        }
    }
};

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
