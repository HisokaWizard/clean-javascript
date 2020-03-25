import { screenClicker } from './from-event/fromEvent';
import { observableToObserver } from './observable-binding/observableBinding';
import { 
    subjectExampleSubscribeCollection,
    subscribeObservableToSubjectObserver,
    mulicastedObservables, 
    observableSubjectMulticastExample,
    observableSubjectMyTest,
    observableReferenceCounting,
    observableBehaviorSubject,
    observableSubscribeAsync,
} from './subject/subjectExersices';
import { dragAndDrop } from './dragAndDrop/drag-and-drop';
import { dragAndDropKefir, div } from './kefir-tests/kefir-test';
// screenClicker();
// observableToObserver();
// subjectExampleSubscribeCollection();
// subscribeObservableToSubjectObserver();
// mulicastedObservables();
// observableSubjectMulticastExample();
// observableSubjectMyTest();
// observableReferenceCounting();
// observableBehaviorSubject();
// observableSubscribeAsync();
dragAndDrop();
dragAndDropKefir(div);