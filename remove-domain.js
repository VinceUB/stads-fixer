// This script is probably too short to be protected by copyright.

console.log("STADS Fixer is up and running");

document.querySelector('.ButtonUp').setAttribute('onmousedown',
	"let bn = document.querySelector('#brugernavn');" +
	"bn_undomained = bn.value.split('@')[0];" +
	"bn.value = bn_undomained;" +
	"onLoginBtnDown(this);"
);

document.querySelector('#indhold').innerHTML += '<center>Fixed with Vincent\'s <a href="https://github.com/VinceUB/stads-fixer">STADS Fixer</a></center>'
