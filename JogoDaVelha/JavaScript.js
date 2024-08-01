const currentPlayer = document.querySelector(".currentPlayer");
let selected;
let player = "X"

function init(){
    selected = []
    currentPlayer.innerHTML = 'JOGADOR DA VEZ:' + player;
    /* cada botao sera iniciado sem valor */
    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = ""
        item.addEventListener("click", newMove);
    });
}
function newMove(e) {
    const index = e.target.getAttribute("date-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove)
    selected[index] = player;
    /* Intercala os jogadores entre X e O */
    player = player === "X" ? "O" : "X";
    currentPlayer.innerHTML = 'JOGADOR DA VEZ' + player;
}
init();