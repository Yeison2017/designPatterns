interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];
  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }
  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notify(value: T): void {
    this.observers.forEach((observer) => observer.refresh(value));
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const observer1 = new Observer<number>((value) =>
  console.log("Multiplicar por 2:", value * 2)
);
const observer2 = new Observer<number>((value) =>
  console.log("Multiplicar por 3:", value * 3)
);

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify(5);
subject.notify(10);
