
const addBtn = document.querySelector('.btn');
const textarea = document.querySelector('textarea');
const noteCon = document.querySelector('.noteContainer');
const placeholder = document.querySelector('#placeholder');
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modalText');
const close = document.querySelector('.close');
let count = 0;

function addNote() {
    count++;
    let h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode('Note ' + count));

    let p = document.createElement('p');
    let note = document.createTextNode(textarea.value);
    p.appendChild(note);

    let btn = document.createElement('button');
    btn.appendChild(document.createTextNode('View Detail'));


    let div = document.createElement('div');
    div.classList.add('noteArea');
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);

    placeholder.classList.add('delete');

    noteCon.appendChild(div);

    btn.addEventListener('click', displayModal);

    function displayModal() {
        modal.style.display = "block";
        let x = note.textContent
        modalText.textContent = x;
    }


    close.addEventListener('click', closeModal);

    function closeModal() {
        modal.style.display = "none"
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}

addBtn.addEventListener('click', addNote);

