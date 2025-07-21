export type TaskResDto = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TasksResDto = {
  tasks: TaskResDto[];
};

export type TaskUpsertReqDto = {
  name: string;
};

export type TaskUpdateReqDto = {
  id: string;
  body: TaskUpsertReqDto;
};
