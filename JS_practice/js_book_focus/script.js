const help = document.getElementById('help');
const fields = document.querySelectorAll('input');

for (let index = 0; index < fields.length; index++) {
    fields[index].addEventListener('focus', (event) => {
        const text = event.target.getAttribute('data-help');
        help.textContent = text;
    });
    fields[index].addEventListener('blur', (event) => {
        help.textContent = '';
    })
}

const textField = document.getElementById('key-press');
const messageMyselfMean = document.getElementById('message-myself-mean');
let timer;
textField.addEventListener('keydown', (event) => {
    messageMyselfMean.innerText = 'Ee-eee-eee click quickly! Common! Yes i like it!'
    clearTimeout(timer);
    timer = setTimeout(() => {
        messageMyselfMean.innerText = 'You are brake! Harry up to fast printing!!'
    }, 1000);
});

function iLoveTonya() {
    let index = 0;
    let interval;
    const body = document.body;

    const message = () => {
        const item = document.createElement('p');
        item.style.top = `${Math.round(Math.random() * body.offsetHeight)}px`;
        item.style.left = `${Math.round(Math.random() * body.offsetWidth)}px`;
        item.style.fontSize = `${Math.round(Math.random() * 50)}px`;
        item.style.color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        item.classList = 'i-love-tonya';
        item.innerText = 'I love Tonya!!!!';
        index++;
        if (index === 1000) {
            clearInterval(interval);
        }
        body.appendChild(item);
    }

    interval = setInterval(message, 100);
}

iLoveTonya();