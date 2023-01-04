// Page-1 (index.html)
function buttonClick() {
  const form = document.getElementById("form");
  const player1 = document.getElementById("name1");
  const player2 = document.getElementById("name2");
    const player1Name = player1.value;
    const player2Name = player2.value;

    localStorage.setItem('player-1', player1Name);
    localStorage.setItem('player-2', player2Name);
}
