export const divJS = document.createElement('div');
divJS.id = 'native-js-square-1';
divJS.style.width = '100px';
divJS.style.height = '100px';
divJS.style.backgroundColor = 'green';
divJS.style.cursor = 'move';
divJS.style.position = 'absolute';
divJS.style.right = 0;
divJS.style.top = 0;
divJS.style.zIndex = 1;
document.body.appendChild(divJS);

export const divJSSecond = document.createElement('div');
divJSSecond.id = 'native-js-square-2';
divJSSecond.style.width = '100px';
divJSSecond.style.height = '100px';
divJSSecond.style.backgroundColor = 'red';
divJSSecond.style.cursor = 'move';
divJSSecond.style.position = 'absolute';
divJSSecond.style.bottom = 0;
divJSSecond.style.left = 0;
divJSSecond.style.zIndex = 1;
document.body.appendChild(divJSSecond);

export function dragAndDropNativeJS(item) {
  item.ondragstart = () => false;
  item.onmousedown = event => {
    const itemCoordinates = getCoordinateOfItem(item);
    const shift = {
      x: event.pageX - itemCoordinates.left,
      y: event.pageY - itemCoordinates.top,
    };

    document.onmousemove = event => {
      item.style.top = `${event.pageY - shift.y}px`;
      item.style.left = `${event.pageX - shift.x}px`;
    }

    item.onmouseup = () => {
      document.onmousemove = null;
      item.onmouseup = null;
    }
  }
}

function getCoordinateOfItem(item) {
  const box = item.getBoundingClientRect();
  return {
    left: box.left + pageXOffset,
    top: box.top + pageYOffset,
  };
}
