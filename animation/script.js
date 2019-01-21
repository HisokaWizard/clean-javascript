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

// function move() {
//     const animation = document.getElementById('animation');
//     const container = document.getElementById('container');
//     let positionX = 0;
//     let positionY = 0;
//     let id;

//     const frame = (finish) => {
//         if (positionX === finish && positionY === finish / 2) {
//             clearInterval(id);
//         } else {
//             positionX = Math.round(Math.random() * (container.clientWidth - animation.clientWidth));
//             positionY = Math.round(Math.random() * (container.clientHeight - animation.clientHeight)); 
//             animation.style.top = `${positionX}px`;
//             animation.style.left = `${positionY}px`;
//         }
//     };

//     id = setInterval(() => frame(50), 200);       
// }

let interval;
function move() {
    const animation = document.getElementById('animation');
    const container = document.getElementById('container');
    const minPosX = 0;
    const minPosY = 0;
    const maxPosX = container.clientWidth - animation.clientWidth;
    const maxPosY = container.clientHeight - animation.clientHeight;
    let posX = 0;
    let posY = 0;
    let stepX = 0;
    let stepY = 0;
    let directionX = true;
    let directionY = true;

    const startMoving = () => {
        if (posX <= minPosX || posX >= maxPosX || posY <= minPosY || posY >= maxPosY) {
            stepX = Math.round(Math.random() * 5);
            stepY = Math.round(Math.random() * 5);
            if (posX <= minPosX) directionX = true;
            if (posX >= maxPosX) directionX = false;
            if (posY <= minPosY) directionY = true;
            if (posY >= maxPosY) directionY = false;
        }
        if (directionX) {
            posX += stepX;
        } else {
            posX -= stepX;
        }
        if (directionY) {
            posY += stepY;
        } else {
            posY -= stepY;
        }
        animation.style.left = `${posX}px`;
        animation.style.top = `${posY}px`;
    }

    interval = setInterval(startMoving, 10);
}

function stopMove() {
    clearInterval(interval);
}