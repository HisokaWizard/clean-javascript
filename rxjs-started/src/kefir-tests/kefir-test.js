import { fromEvents } from 'kefir';

export const div = document.createElement('div');
div.id = 'kefir-square-1';
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'blue';
div.style.cursor = 'move';
div.style.position = 'absolute';
div.style.zIndex = 1;
div.style.left = 0;
div.style.top = 0;
document.body.appendChild(div);

export const divSecond = document.createElement('div');
divSecond.id = 'kefir-square-2';
divSecond.style.width = '100px';
divSecond.style.height = '100px';
divSecond.style.backgroundColor = 'violet';
divSecond.style.cursor = 'move';
divSecond.style.position = 'absolute';
divSecond.style.bottom = 0;
divSecond.style.right = 0;
divSecond.style.zIndex = 1;
document.body.appendChild(divSecond);

export function dragAndDropKefir(item) {
  const mouseDownStream = fromEvents(item, 'mousedown');
  const mouseMoveStream = fromEvents(document, 'mousemove');
  const mouseUpStream = fromEvents(item, 'mouseup');

  const moves = mouseDownStream.flatMap((downEvent) => {
    return mouseMoveStream.takeUntilBy(mouseUpStream).diff(diffCoordinatesByMoving, downEvent);
  });

  mouseUpStream.onValue(value => {
    console.log(value);
    checkAnotherItemHere(item);
  });

  const position = moves.scan(finalCoordinatesAfterUp, {x: item.offsetLeft, y: item.offsetTop});

  position.onValue(pos => {
    item.style.top = `${pos.y}px`;
    item.style.left = `${pos.x}px`;
  });
}

function diffCoordinatesByMoving(prevCoordinate, nextCoordinate) {
  return {
    x: nextCoordinate.clientX - prevCoordinate.clientX,
    y: nextCoordinate.clientY - prevCoordinate.clientY,
  };
}

function finalCoordinatesAfterUp(currentPosition, move) {
  return {
    x: currentPosition.x + move.x,
    y: currentPosition.y + move.y,
  }
}

function checkAnotherItemHere(item) {
  console.log(item);
}