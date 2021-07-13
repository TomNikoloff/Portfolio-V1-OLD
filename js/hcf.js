
const hexBtn = document.getElementById('hexButton');
const hexSpan = document.getElementById('hexSpan');
const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

hexBtn.addEventListener('click', hexBackground);

function randomNum() {
    return Math.floor(Math.random() * 16);  
}

function hexBackground() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexArray[randomNum()];
    }
    document.body.style.backgroundColor = hexColor;
    hexSpan.innerHTML = hexColor;
}

