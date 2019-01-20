/*function move() {
    const animation = document.getElementById('animation');
    let position = 0;
    let id;

    if (animation.style.top === '350px' && animation.style.left === '350px') {
        position = 350;
    } else {
        position = 0;
    }
    
    if (position === 0) {
        id = setInterval(() => frame(350), 10);
    }
    if (position === 350) {
        id = setInterval(() => frame(0), 10);
    }

    const frame = (finish) => {
        if (position === finish) {
            clearInterval(id);
        } else {
            if (finish === 0) {
                position--;
            } else {
                position++;
            }
            animation.style.top = `${position}px`;
            animation.style.left = `${position}px`;
        }
    };
} */

function move() {
    const animation = document.getElementById('animation');
    const container = document.getElementById('container');
    let positionX = 0;
    let positionY = 0;
    let id;

    const frame = (finish) => {
        if (positionX === finish && positionY === finish / 2) {
            clearInterval(id);
        } else {
            positionX = Math.round(Math.random() * (container.clientWidth - animation.clientWidth));
            positionY = Math.round(Math.random() * (container.clientHeight - animation.clientHeight)); 
            animation.style.top = `${positionX}px`;
            animation.style.left = `${positionY}px`;
        }
    };

    id = setInterval(() => frame(50), 200);       
}