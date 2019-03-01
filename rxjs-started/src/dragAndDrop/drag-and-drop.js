import { fromEvent } from 'rxjs';

export function dragAndDrop() {
    const target = document.createElement('div');
    target.style.width = '100px';
    target.style.height = '100px';
    target.style.position = 'relative';
    target.style.backgroundColor = 'black';
    target.style.cursor = 'pointer';
    document.body.appendChild(target);

    const mouseup = fromEvent(target, 'mouseup');
    const mousemove = fromEvent(document, 'mousemove');
    const mousedown = fromEvent(target, 'mousedown');

    mousedown.subscribe((mouseD) => {
        const startX = mouseD.clientX + window.scrollX;
        const startY = mouseD.clientY + window.scrollY;
        const startLeft = parseInt(mouseD.target.style.left, 10) || 0;
        const startTop = parseInt(mouseD.target.style.top, 10) || 0;

        const finishMove = mousemove.subscribe((mouseM) => {
            mouseM.preventDefault();
            target.style.left = startLeft + mouseM.clientX - startX;
            target.style.top = startTop + mouseM.clientY - startY;
        });

        mouseup.subscribe((mouseU) => {
            finishMove.unsubscribe();
        });
    });

}