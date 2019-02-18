import { fromEvent } from 'rxjs';
import { scan, map } from 'rxjs/operators';

export function screenClicker() {
    const click = fromEvent(document.body, 'mousemove');
    click.pipe(
        map(event => {
            const coord = {
                x: event.clientX,
                y: event.clientY
            };
            return coord;
        }),
        scan((count, coord) => {
            return {
                count: count,
                coord: coord
            }
        } , 0)
    )
    .subscribe(result => {
        createObject(result);
        setTimeout(() => {
            deleteObjects();
        }, 100);
    });

    const createObject = (result) => {
        const text = document.createElement('div');
        text.innerText = `x: ${result.coord.x}, y: ${result.coord.y}`;
        text.style.position = 'absolute';
        text.style.top = result.coord.y;
        text.style.left = result.coord.x;
        text.style.border = '1px solid blue';
        text.style.borderRadius = '10px';
        text.style.width = '100px';
        text.style.height = '20px';
        text.style.backgroundColor = 'lightblue';
        text.style.textAlign = 'center';
        document.body.appendChild(text);
    };

    const deleteObjects = () => {
        const divElems = document.getElementsByTagName('div');
        for (let index = 0; index < divElems.length; index++) {
            document.body.removeChild(divElems[index]);
        }
    };
}