import { ScheduleType } from "./predefined-tasks.enum";

export type PredefinedTaskResDto = {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  showDailyCount: boolean;
};

export type PredefinedTasksResDto = {
  predefinedTasks: PredefinedTaskResDto[];
};

export type PredefinedTaskScheduleUpsertReqDto = {
  scheduleType: ScheduleType;
  scheduleOn: string; // HH:mm
};

export type PredefinedTaskUpsertReqDto = {
  name: string;
  description?: string;
  schedule: PredefinedTaskScheduleUpsertReqDto[];
};

export type PredefinedTaskUpdateReqDto = {
  id: string;
  body: PredefinedTaskUpsertReqDto;
};

export type PredefinedTaskSchedule = {
  id: string;
  predefinedTaskId: string;
  scheduleType: ScheduleType;
  scheduleOn: string; // HH:MM
  createdAt: string;
  updatedAt: string;
  predefinedTask: PredefinedTaskResDto;
};
