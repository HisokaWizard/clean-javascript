
const animals = [
    {kind: 'cat', live: '12-15 years', type: 'mammal', size: 'small'},
    {kind: 'dog', live: '15-20 years', type: 'mammal', size: 'middle'},
    {kind: 'cow', live: '10-12 years', type: 'mammal', size: 'big'},
    {kind: 'elephant', live: '40-50 years', type: 'mammal', size: 'huge'},
    {kind: 'snake', live: '10-100 years', type: 'reptile', size: 'small-huge'},
]; 

function createTableWithData(array) {
    
    const rows = array.length;
    const keys = Object.keys(array[0]);
    const columns = keys.length;
    
    const table = document.createElement('table');
    const trHead = document.createElement('tr');
    trHead.classList.add('table-header');
    for (let index = 0; index < keys.length; index++) {
        const td = document.createElement('td');
        td.innerText = keys[index];
        trHead.appendChild(td);
    }
    table.appendChild(trHead);

    for (let indexRow = 0; indexRow < rows; indexRow++) {
        const tr = document.createElement('tr');
        for (let indexCol = 0; indexCol < columns; indexCol++) {
            const td = document.createElement('td');
            td.innerText = array[indexRow][keys[indexCol]];
            tr.appendChild(td);
        }
        table.appendChild(tr);    
    }

    const body = document.getElementsByTagName('body');
    body[0].appendChild(table);
}

createTableWithData(animals);