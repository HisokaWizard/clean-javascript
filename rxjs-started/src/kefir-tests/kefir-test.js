import { fromEvents } from 'kefir';

export const div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'blue';
document.body.appendChild(div);

export function dragAndDropKefir(item) {
  const mouseDownStream = fromEvents(item, 'mousedown');
  const mouseMoveStream = fromEvents(item, 'mousemove');
  const mouseUpStream = fromEvents(item, 'mouseup');

  mouseDownStream.onValue(value => console.log(value)).onError(err => console.log(err));
  mouseMoveStream.onValue(value => console.log(value)).onError(err => console.log(err));
  mouseUpStream.onValue(value => console.log(value)).onError(err => console.log(err));

}