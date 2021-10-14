import ITask from './interfaces/ITask';
import Queue from './queue';

export default class Queuety	{
  constructor() {
    this.queue = new Queue();
    this.isActive = false;
  }

  queue: Queue;
  isActive: Boolean;

  async newJob(task: (args: Array<any>) => Promise<void>, ...args: Array<any>) {
    const job: ITask = {
      params: args,
      method: task
    }

    this.queue.enqueue(job);
    if (!this.isActive) await this.run();
  }

  async run() {
    if (this.queue.peek()) {
      if (!this.isActive) this.isActive = true;
      const task: ITask = this.queue.dequeue();
      await task.method(task.params);
      await this.run();
    } else {
      this.isActive = false;
    }
  }
}
