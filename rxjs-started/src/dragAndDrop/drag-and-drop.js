import { fromEvent, of } from 'rxjs'; 

for (let index = 0; index < 10; index++) {
    const target = document.createElement('div');
    target.id = index;
    target.style.width = '100px';
    target.style.height = '100px';
    target.style.position = 'relative';
    target.style.backgroundColor = 'black';
    target.style.cursor = 'pointer';
    target.style.left = `${Math.round(Math.random() * (document.body.clientWidth - 100))}px`;
    target.style.top = `${Math.round(Math.random() * (document.body.clientHeight - 100))}px`;
    document.body.appendChild(target);
}

export function dragAndDrop() {
    const mouseup = fromEvent(document.body, 'mouseup');
    const mousemove = fromEvent(document.body, 'mousemove');
    const mousedown = fromEvent(document.body, 'mousedown');

    const bodyElementArray = [];
    for (let index = 0; index < document.body.children.length; index++) {
        bodyElementArray.push(document.body.children[index]);
    }

    const finishDown = mousedown.subscribe((mouseD) => {
        const startX = mouseD.clientX + window.scrollX;
        const startY = mouseD.clientY + window.scrollY;
        const startLeft = parseInt(mouseD.target.style.left, 10) || 0;
        const startTop = parseInt(mouseD.target.style.top, 10) || 0;

        const currentElement = bodyElementArray.filter(element => {
            const elemXStart = parseInt(element.style.left);
            const elemXFinish = parseInt(element.style.left) + element.clientWidth;
            const elemYStart = parseInt(element.style.top);
            const elemYFinish = parseInt(element.style.top) + element.clientHeight;
            if (elemXStart < startX && elemXFinish > startX && elemYStart < startY && elemYFinish > startY) {
                return element;
            }
        });

        const finishMove = mousemove.subscribe((mouseM) => {
            if (currentElement.length === 1) {
                mouseM.preventDefault();
                currentElement[0].style.left = startLeft + mouseM.clientX - startX;
                currentElement[0].style.top = startTop + mouseM.clientY - startY;
            }
        });

        const finishUp = mouseup.subscribe((mouseU) => {
            finishMove.unsubscribe();
        });
    });
}