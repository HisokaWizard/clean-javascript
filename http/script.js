const url = 'https://eloquentjavascript.net/author';

function getTextFromServer() {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.setRequestHeader('accept', 'text/plain');
    req.addEventListener('load', () => {
        console.log('TEXT', req.response, req.responseText);
    });
    req.send(null);
}

function getHTMLFromServer() {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.setRequestHeader('accept', 'text/html');
    req.addEventListener('load', () => {
        console.log('HTML', req.response, req.responseText);
    });
    req.send(null);
}

function getJSONFromServer() {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.setRequestHeader('accept', 'application/json');
    req.addEventListener('load', () => {
        console.log('JSON', req.response, req.responseText);
    });
    req.send(null);
}

function getAnyFromServer() {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.setRequestHeader('accept', 'application/rainbows+unicorn');
    req.addEventListener('load', () => {
        console.log('JSON', req.response, req.responseText);
    });
    req.send(null);
}

getTextFromServer();
getHTMLFromServer();
getJSONFromServer();
getAnyFromServer();