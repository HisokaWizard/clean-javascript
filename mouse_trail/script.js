let stars = [];
const buttonGenerate = document.getElementById('generate-stars');
function generateObject () {
    stars = [];
    for (let index = 0; index < document.body.children.length; index++) {
        if (document.body.children[index].tagName === 'BUTTON' || document.body.children[index].tagName === 'SCRIPT') {
            continue;
        } else {
            document.body.removeChild( document.body.children[index]);
            index--;
        }
    }
    for (let index = 0; index < 200; index++) {
        const colorR = `${200 + Math.round(Math.random() * 55)}`;
        const colorG = `${200 + Math.round(Math.random() * 55)}`;
        const colorB = `${200 + Math.round(Math.random() * 55)}`;
        const star = {
            name: index,
            x: Math.round(10 + Math.random() * document.body.clientWidth - 10),
            y: Math.round(10 + Math.random() * document.body.clientHeight - 10),
            color: `rgb(${colorR},${colorG},${colorB})`,
            size: Math.round(Math.random() * 10),
        };
        stars.push(star);
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.left = `${star.x}px`;
        element.style.top = `${star.y}px`;
        element.style.backgroundColor = star.color;
        element.style.width = `${star.size}px`;
        element.style.height = `${star.size}px`;
        element.style.borderRadius = `${50}%`;
        element.value = star.name;
        document.body.appendChild(element);
    }
}

function mouseTrail() {
    document.addEventListener('mousemove', (event) => {
        const starsNearMouse = [];
        if (event.clientX > 0 &&
            event.clientX < buttonGenerate.clientWidth + buttonGenerate.offsetLeft &&
            event.clientY > 0 &&
            event.clientY < buttonGenerate.clientHeight + buttonGenerate.offsetTop) {
            event.preventDefault();
            return;
        }
        stars.forEach(star => {
            const deltaX = Math.abs(star.x - event.clientX);
            const deltaY = Math.abs(star.y - event.clientY);
            if (deltaX < 50 && deltaY < 50) {
                starsNearMouse.push(star.name);
            }
        });
        for (let index = 0; index < document.body.children.length; index++) {
            const isStar = starsNearMouse.find(elem => elem === document.body.children[index].value);
            if (isStar) {
                document.body.children[index].style.top = event.clientY;
                document.body.children[index].style.left = event.clientX;
            }
        }
    });
}

mouseTrail();