import { TaskResDto, TasksResDto, TaskUpsertReqDto } from "./tasks.dto";

export class TasksApi {
    public static get = async (): Promise<TasksResDto> => {
        const res = await fetch("/api/tasks");
        return res.json();
    }

    public static getById = async (id: string): Promise<TaskResDto> => {
        const res = await fetch(`/api/tasks/${id}`);
        return res.json();
    }
    
    public static create = async (req: TaskUpsertReqDto): Promise<TaskResDto> => {
        const res = await fetch("/api/tasks", {
            method: "POST",
            body: JSON.stringify(req),
        });
        return res.json();
    }

    public static update = async (id: string, req: TaskUpsertReqDto): Promise<TaskResDto> => {
        const res = await fetch(`/api/tasks/${id}`, {
            method: "PUT",
            body: JSON.stringify(req),
        });
        return res.json();
    }

    public static delete = async (id: string): Promise<void> => {
        const res = await fetch(`/api/tasks/${id}`, {
            method: "DELETE",
        });
        return res.json();
    }
}