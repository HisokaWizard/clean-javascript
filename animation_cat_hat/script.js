const cat = document.getElementById('cat');
const hat = document.getElementById('hat');

function animate(object, angleStart) {
    let angle = angleStart;
    let index = 0;
    const animation = () => {
        if(index === 100) {
            return;
        }
        setTimeout(() => {
            angle += index;
            object.style.top = `${Math.sin(angle) * 20}px`;
            object.style.left = `${Math.cos(angle) * 100}px`;
            index++;
            animation();
        }, 200);
    };

    animation();
}

animate(cat, 100);
animate(hat, 400);