export type TaskResDto = {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type TasksResDto = {
  tasks: TaskResDto[];
};

export type TaskUpsertReqDto = {
  name: string;
  description?: string;
};

export type TaskUpdateReqDto = {
  id: string;
  body: TaskUpsertReqDto;
};
