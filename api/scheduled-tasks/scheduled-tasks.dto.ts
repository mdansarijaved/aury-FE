export type ScheduledTaskResDto = {
    id: string;
    taskId: string;
    scheduledOn: string;
    duration: number;
    status: string;
    assignedTo: string | null;
    createdAt: string;
    updatedAt: string;
}

export type ScheduledTasksResDto = ScheduledTaskResDto[];

export enum ScheduledTaskStatus {
    PENDING = "pending",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
}

type ScheduledTaskUpsertReqDto = {
    taskId: string;
    scheduledOn: string;
    duration: number;
    status: ScheduledTaskStatus;
    assignedTo: string | null;
}

export type ScheduledTaskUpdateReqDto = {
    id: string;
    body: Partial<ScheduledTaskUpsertReqDto>;
}

export type ScheduledTaskCreateReqDto = ScheduledTaskUpsertReqDto;