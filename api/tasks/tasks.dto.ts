import { PredefinedTaskResDto, PredefinedTaskSchedule } from "../predefined-tasks/predefined-tasks.dto";
import { TaskStatus } from "./tasks.enums";

export type TaskResDto = {
  id: string;
  predefinedTaskScheduleId: string;
  predefinedTaskId: string;
  scheduledOn: string;
  status: TaskStatus;
  predefinedTaskSchedule: PredefinedTaskSchedule;
  predefinedTask: PredefinedTaskResDto;
};

export type TasksResDto = {
  tasks: TaskResDto[];
};

type TaskUpsertReqDto = {
  predefinedTaskId: string;
  scheduledOn: string;
  duration: number;
  status: TaskStatus;
};

export type TaskUpdateReqDto = {
  id: string;
  body: Partial<TaskUpsertReqDto>;
};

export type TaskCreateReqDto = TaskUpsertReqDto;
