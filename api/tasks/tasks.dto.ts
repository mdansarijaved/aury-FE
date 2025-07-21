export type TaskResDto = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export type TasksResDto = TaskResDto[];

export type TaskUpsertReqDto = {
    name: string;
}
