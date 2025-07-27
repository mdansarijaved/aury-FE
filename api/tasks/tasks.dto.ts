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

export enum TaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

type TaskUpsertReqDto = {
  taskId: string;
  scheduledOn: string;
  duration: number;
  status: TaskStatus;
  assignedTo: string | null;
};

export type TaskUpdateReqDto = {
  id: string;
  body: Partial<TaskUpsertReqDto>;
};

export type TaskCreateReqDto = TaskUpsertReqDto;
