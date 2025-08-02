import { TaskStatusEnum } from "./tasks.enums";

export type TaskResDto = {
  id: string;
  taskId: string;
  scheduledOn: string;
  duration: number;
  status: string;
  assignedTo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TasksResDto = TaskResDto[];

type TaskUpsertReqDto = {
  predefinedTaskId: string;
  scheduledOn: string;
  duration: number;
  status: TaskStatusEnum;
  assignedTo?: string;
};

export type TaskUpdateReqDto = {
  id: string;
  body: Partial<TaskUpsertReqDto>;
};

export type TaskCreateReqDto = TaskUpsertReqDto;
