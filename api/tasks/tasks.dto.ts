import { PredefinedTaskResDto } from "../predefined-tasks/predefined-tasks.dto";
import { TaskStatusEnum } from "./tasks.enums";

export type TaskResDto = {
  id: string;
  predefinedTaskId: string;
  scheduledOn: string;
  duration: number;
  status: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  predefinedTask: PredefinedTaskResDto;
};

export type TasksResDto = {
  tasks: TaskResDto[];
};

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
