export default class Queue {
  constructor() {
    this.queue = [];
  }

  queue: Array<any>;

  enqueue(item: any): void {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek(): any | undefined {
    return !this.isEmpty() ? this.queue[0] : undefined;
  }
}

