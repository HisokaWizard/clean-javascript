import { fromEvent } from 'rxjs';
import { scan, map } from 'rxjs/operators';
import '../assets/style.css';

export function screenClicker() {
    const click = fromEvent(document.body, 'click');
    click.pipe(
        map(event => {
            const coord = {
                x: event.clientX,
                y: event.clientY
            };
            return coord;
        }),
        scan(({count}, coord) => {
            ++count;
            return {
                count: count,
                coord: coord
            }
        } , {count: 0})
    )
    .subscribe(result => {
        createObject(result);
        deleteObjects();
    });

    const createObject = (result) => {
        const text = document.createElement('div');
        text.innerText = `x: ${result.coord.x}, y: ${result.coord.y}, click №: ${result.count}`;
        text.style.top = result.coord.y;
        text.style.left = result.coord.x;
        text.classList.add('coord');
        document.body.appendChild(text);
    };

    const deleteObjects = () => {
        const divElems = document.getElementsByTagName('div');
        for (let index = 0; index < divElems.length - 1; index++) {
            document.body.removeChild(divElems[index]);
        }
    };
}