import { ScheduledTaskResDto, ScheduledTasksResDto, ScheduledTaskCreateReqDto, ScheduledTaskUpdateReqDto } from "./scheduled-tasks.dto";

export class ScheduledTasksApi {
    public static get = async (): Promise<ScheduledTasksResDto> => {
        const res = await fetch("/api/scheduled-tasks");
        return res.json();
    }

    public static getById = async (id: string): Promise<ScheduledTaskResDto> => {
        const res = await fetch(`/api/scheduled-tasks/${id}`);
        return res.json();
    }
    
    public static create = async (req: ScheduledTaskCreateReqDto): Promise<ScheduledTaskResDto> => {
        const res = await fetch("/api/scheduled-tasks", {
            method: "POST",
            body: JSON.stringify(req),
        });
        return res.json();
    }

    public static update = async (id: string, req: ScheduledTaskUpdateReqDto): Promise<ScheduledTaskResDto> => {
        const res = await fetch(`/api/scheduled-tasks/${id}`, {
            method: "PUT",
            body: JSON.stringify(req),
        });
        return res.json();
    }

    public static delete = async (id: string): Promise<void> => {
        const res = await fetch(`/api/scheduled-tasks/${id}`, {
            method: "DELETE",
        });
        return res.json();
    }
}