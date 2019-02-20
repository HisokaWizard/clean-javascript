import { Observable, from } from 'rxjs';
import { pipe, filter } from 'rxjs/operators';

export function observableToObserver() {

    const value = (firstWord) => {
        const number = Math.round(Math.random() * 1000);
        return `${firstWord} value: ${number}`;
    }

    const observable = new Observable(subscriber => {
        subscriber.next(value('First'));
        subscriber.next(value('Second'));
        subscriber.next(value('Third'));
        setTimeout(() => {
            subscriber.next(value('Fourth'))
            subscriber.complete();
        }, 5000);

    });

    console.log('before observable work!');
    observable.subscribe({
        next(result) { console.log(result) },
        error(error) { console.log(error) },
        complete() { console.log('work completed!') },
    });
    console.log('If you don`t see something between this message and previous, that because of all subscribers are asyncronious!');

    const names = ['Jastin', 'Ursulla', 'Manik', 'Frenk', 'Richard', 'Stefan', 'Artur', 'Cristal', 'Bullius'];
    const namesObservable = from(names);
    namesObservable.subscribe(name => {console.log(name)});
}