
let input = document.querySelector("#inputText");
const checkBtn = document.querySelector("#checkBtn");
const vowelsDiv = document.querySelector("#vowelsDiv");
let numOfVowels = document.querySelector("#numOfVowels");
let count = 0;


function inputLength() {
    return input.value.length;
}


function vowelCounter() {
    for (let i = 0; i < input.value.length; i++) {
        if(input.value[i] == 'a' || input.value[i] == 'e' || input.value[i] == 'i' || input.value[i] == 'o' || input.value[i] == 'u') {
            count++;
        }
    }
    numOfVowels.textContent = 'There are ' + count + ' vowels.';
    vowelsDiv.appendChild(numOfVowels);
    count = 0;
    /*
    input.value = "";
    */
}

function check() {
    if (inputLength() > 0) {
        vowelCounter();
    }
}

checkBtn.addEventListener('click', check);