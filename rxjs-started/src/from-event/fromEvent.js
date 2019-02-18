import { fromEvent } from 'rxjs';
import { scan, map } from 'rxjs/operators';

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
        scan((count, coord) => {
            const value = ++count;
            console.log(value);
            return {
                coord: coord,
                count: value
            }
        }, 0)
    )
    .subscribe(result => {
        console.log(result);
        const text = document.createElement('div');
        text.innerText = `Click count: ${result.count}`;
        text.style.position = 'absolute';
        text.style.top = result.coord.y;
        text.style.left = result.coord.x;
        document.body.appendChild(text);
    });
}