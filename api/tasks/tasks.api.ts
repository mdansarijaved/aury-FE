import { globalFetch } from "../global.fetch";
import {
  TaskResDto,
  TasksResDto,
  TaskUpdateReqDto,
  TaskUpsertReqDto,
} from "./tasks.dto";

export class TasksApi {
  public static get = async (): Promise<TasksResDto> => {
    const res = await globalFetch("/tasks");
    return res;
  };

  public static getById = async (id: string): Promise<TaskResDto> => {
    const res = await globalFetch(`/tasks/${id}`);
    return res;
  };

  public static create = async (req: TaskUpsertReqDto): Promise<TaskResDto> => {
    const res = await globalFetch("/tasks", {
      method: "POST",
      body: JSON.stringify(req),
    });
    return res;
  };

  public static update = async ({
    body,
    id,
  }: TaskUpdateReqDto): Promise<TaskResDto> => {
    const res = await globalFetch(`/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    return res;
  };

  public static delete = async (id: string): Promise<void> => {
    const res = await globalFetch(`/tasks/${id}`, {
      method: "DELETE",
    });
    return res;
  };
}
