export interface Task  {
    id: string;
    userId: string;
    title: string;
    summary:string;
    dueDate: string;
  }

export interface NewTaskData {

  title: string;
  summery: string;
  date: string
}