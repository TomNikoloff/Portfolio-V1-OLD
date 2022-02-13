
const nameEx = document.querySelector('#name');
const date = document.querySelector('#date');
const amount = document.querySelector('#amount');
const addItem = document.querySelector('#add_Item');
const table = document.querySelector('table');
const input = document.querySelectorAll('input');

function expenseTracker() {
    let newTr = document.createElement('tr');
    table.appendChild(newTr);

    let nameTd = document.createElement('td');
    nameTd.appendChild(document.createTextNode(nameEx.value));
    newTr.appendChild(nameTd);

    let dateTd = document.createElement('td');
    dateTd.appendChild(document.createTextNode(date.value));
    newTr.appendChild(dateTd);

    let amountTd = document.createElement('td');
    amountTd.appendChild(document.createTextNode('£'+ amount.value));
    newTr.appendChild(amountTd);

    let dTd = document.createElement('td');
    let dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    dBtn.classList.add('dBtn');
    dTd.appendChild(dBtn);
    newTr.appendChild(dTd);

    function deleteRow() {
        newTr.classList.add('delete');
    }

    dBtn.addEventListener('click', deleteRow);

}


addItem.addEventListener('click', expenseTracker);

