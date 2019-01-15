let tab;
let tabContent;

window.onload = () => {
    tabContent = document.getElementsByClassName('tab-content');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(value) {
    for (let index = value; index < tabContent.length; index++) {
        tabContent[index].classList.remove('show');
        tabContent[index].classList.add('hide');
        tab[index].classList.remove('white-border');
    }
}

document.getElementById('tabs').onclick = (event) => {
    const target = event.target;
    if (target.className === 'tab') {
        for (let index = 0; index < tab.length; index++) {
            if (target === tab[index]) {
                showTabsContent(index);
                break;
            }
        }
    }
}

function showTabsContent(value) {
    if (tabContent[value].classList.contains('hide')) {
        hideTabsContent(0);
        tab[value].classList.add('white-border');
        tabContent[value].classList.remove('hide');
        tabContent[value].classList.add('show');
    }
}