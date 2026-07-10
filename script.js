function startGame(){

let html=`

<h2>Card 1 / 11</h2>

<h1>🇮🇳 India 2010s</h1>

<h3>Select a Player</h3>

`;

eras[0].players.forEach(function(player){

html+=`

<button class="player">

${player}

</button>

`;

});

document.getElementById("app").innerHTML=html;

}
