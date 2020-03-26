import { dragAndDropKefir, div, divSecond } from './kefir-tests/kefir-test';
import { dragAndDropNativeJS, divJS, divJSSecond } from './dnd_native_js/dnd';
document.body.style.backgroundColor = 'lightcyan';
dragAndDropKefir(div);
dragAndDropKefir(divSecond);
dragAndDropNativeJS(divJS);
dragAndDropNativeJS(divJSSecond);