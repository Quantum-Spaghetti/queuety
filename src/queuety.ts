import Task from './interfaces/task';
import Queue from './queue';

export default class Queuety	{
  constructor() {
    this.queue = new Queue();
    this.isActive = false;
  }

  queue: Queue;
  isActive: Boolean;

  async newJob(task: Task) {
    this.queue.enqueue(task);
    if (!this.isActive) await this.run();
  }

  async run() {
    if (this.queue.peek()) {
      if (!this.isActive) this.isActive = true;
      const task: Task = this.queue.dequeue();
      await task.job(task.params);
      await this.run();
    } else {
      this.isActive = false;
    }
  }
}
