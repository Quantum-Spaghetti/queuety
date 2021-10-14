export default interface ITask {
  params: Array<any>;
  method: (...args: Array<any>) => Promise<void>;
}
