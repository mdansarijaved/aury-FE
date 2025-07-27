export type PredefinedTaskResDto = {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type PredefinedTasksResDto = {
  predefinedTasks: PredefinedTaskResDto[];
};

export type PredefinedTaskUpsertReqDto = {
  name: string;
  description?: string;
};

export type PredefinedTaskUpdateReqDto = {
  id: string;
  body: PredefinedTaskUpsertReqDto;
};
