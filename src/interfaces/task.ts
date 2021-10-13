export default interface Task {
  params: Object;
  job(params: Object): Promise<any>
}

