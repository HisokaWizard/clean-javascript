import { Subject, from, interval, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { multicast, refCount } from 'rxjs/operators';

export function subjectExampleSubscribeCollection() {
    const subject = new Subject();

    subject.subscribe({
        next: (value) => { console.log(`Observer 1: ${value}`) }
    });

    subject.subscribe({
        next: (value) => { console.log(`Observer 2: ${value}`) }
    });

    subject.next(1000);
    subject.next(2000);
    subject.next(3000);
}

export function subscribeObservableToSubjectObserver() {
    const subject = new Subject();
    
    subject.subscribe({
        next: (str) => console.log(`observerA: ${str}`)
    });
    
    const observable = from(['Chack', 'Klark', 'Snarlak']);
    
    observable.subscribe(subject);
}

export function mulicastedObservables() {
    const source = from([10, 20, 30]);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject));

    // These are, under the hood, `subject.subscribe({...})`:
    multicasted.subscribe({
        next: (v) => console.log(`observerA: ${v}`)
    });
    multicasted.subscribe({
        next: (v) => console.log(`observerB: ${v}`)
    });

    // This is, under the hood, `source.subscribe(subject)`:
    multicasted.connect();
}

//documentation variant
export function observableSubjectMulticastExample() {
    const source = interval(500);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject));
    let subscription1, subscription2, subscriptionConnect;

    subscription1 = multicasted.subscribe({
        next: (value) => console.log(`observerA: ${value}`)
    });
    // We should call `connect()` here, because the first
    // subscriber to `multicasted` is interested in consuming values
    subscriptionConnect = multicasted.connect();

    setTimeout(() => {
        subscription2 = multicasted.subscribe({
            next: (value) => console.log(`observerB: ${value}`)
        });
    }, 1000);

    setTimeout(() => {
        subscription1.unsubscribe();
    }, 5000);

    // We should unsubscribe the shared Observable execution here,
    // because `multicasted` would have no more subscribers after this
    setTimeout(() => {
        subscription2.unsubscribe();
        subscriptionConnect.unsubscribe(); // for the shared Observable execution
    }, 7000);
}

// my experiment
export function observableSubjectMyTest() {
    const source = interval(500);
    const subject = new Subject();
    let subscription1, subscription2, subscriptionConnect;

    subscription1 = subject.subscribe({
        next: (value) => console.log(`observerA: ${value}`)
    });

    // We should call `connect()` here, because the first
    // subscriber to `multicasted` is interested in consuming values
    subscriptionConnect = source.subscribe(subject);

    setTimeout(() => {
        subscription2 = subject.subscribe({
            next: (value) => console.log(`observerB: ${value}`)
        });
    }, 1000);

    setTimeout(() => {
        subscription1.unsubscribe();
    }, 5000);

    // We should unsubscribe the shared Observable execution here,
    // because `multicasted` would have no more subscribers after this
    setTimeout(() => {
        subscription2.unsubscribe();
        subscriptionConnect.unsubscribe(); // for the shared Observable execution
    }, 7000);
}

export function observableReferenceCounting() {
    const source = interval(500);
    const subject = new Subject();
    const refCounted = source.pipe(multicast(subject), refCount());
    let subscription1, subscription2;

    // This calls `connect()`, because
    // it is the first subscriber to `refCounted`
    console.log('observerA subscribed');
    subscription1 = refCounted.subscribe({
        next: (value) => console.log(`observerA: ${value}`)
    });

    setTimeout(() => {
        console.log('observerB subscribed');
        subscription2 = refCounted.subscribe({
            next: (value) => console.log(`observerB: ${value}`)
        });
    }, 1000);

    setTimeout(() => {
        console.log('observerA unsubscribed');
        subscription1.unsubscribe();
    }, 2000);

    // This is when the shared Observable execution will stop, because
    // `refCounted` would have no more subscribers after this
    setTimeout(() => {
        console.log('observerB unsubscribed');
        subscription2.unsubscribe();
    }, 4000);
}

export function observableBehaviorSubject() {
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
        next: (value) => console.log(`observerA: ${value}`)
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
        next: (value) => console.log(`observerB: ${value}`)
    });

    subject.next(3);
    //
    console.log(`\n`);
    // ReplaySubject
    const subject2 = new ReplaySubject(10);

    subject2.subscribe({
        next: (value) => console.log(`observerA: ${value}`)
    });

    subject2.next(20);
    subject2.next(30);
    subject2.next(5000);

    subject2.subscribe({
        next: (value) => console.log(`observerB: ${value}`)
    });

    subject2.next(54321);

    //
    console.log(`\n`);
    //replay subject with time
    const subject3 = new ReplaySubject(10, 2000);

    subject3.subscribe({
        next: (value) => console.log(`observerA: ${value}`)
    });

    let i = 1;
    const interval = setInterval(() => {
        subject3.next(i++);
        if(i === 20) {
            clearInterval(interval);
        }
    }, 200);
     
    setTimeout(() => {
      subject3.subscribe({
        next: (value) => console.log(`observerB: ${value}`)
      });
    }, 3000);
}

export function observableSubscribeAsync() {
    const subject = new AsyncSubject();

    subject.subscribe({
        next: (value) => console.log(`observerA: ${value}`)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
        next: (value) => console.log(`observerB: ${value}`)
    });

    subject.next(5);
    subject.complete();
}