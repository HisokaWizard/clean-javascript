function selectFruit() {
    const select = document.getElementById('fruits-list');
    const options = document.getElementById('fruits-list').options;
    document.getElementsByClassName('output')[0].innerText = `Selected element ${options[select.selectedIndex].text}`;
}

function findExp() {
    let unknownVar = 0;
    const x = 0.017 * 5.4 * Math.pow(10, 11);
    // for (let i = 0; i < 1; i+=0.001) {
        const value = Math.exp(116298 / (8.31 * 450));
    //     if (x > value - 0.5 && x < value + 0.5) {
    //             console.log(i);
    //         }
    // }
    console.log('nine');
}

findExp();