function selectFruit() {
    const select = document.getElementById('fruits-list');
    const options = document.getElementById('fruits-list').options;
    document.getElementsByClassName('output')[0].innerText = `Selected element ${options[select.selectedIndex].text}`;
}

function rangeEvent() {
    const range = document.getElementById('range-first');
    const body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    const rangeValue = document.getElementsByClassName('range-value');
    rangeValue[0].innerText = range.value;
}