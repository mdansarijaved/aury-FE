import {
  ScheduledTaskResDto,
  ScheduledTasksResDto,
  ScheduledTaskCreateReqDto,
  ScheduledTaskUpdateReqDto,
} from "./scheduled-tasks.dto";
import { globalFetch } from "../global.fetch";
export class ScheduledTasksApi {
  public static get = async (): Promise<ScheduledTasksResDto> => {
    const res = await globalFetch("/scheduled-tasks");
    return res;
  };

  public static getById = async (id: string): Promise<ScheduledTaskResDto> => {
    const res = await globalFetch(`/scheduled-tasks/${id}`);
    return res;
  };

  public static create = async (
    req: ScheduledTaskCreateReqDto,
  ): Promise<ScheduledTaskResDto> => {
    const res = await globalFetch("/scheduled-tasks", {
      method: "POST",
      body: JSON.stringify(req),
    });
    return res;
  };

  public static update = async (
    id: string,
    req: ScheduledTaskUpdateReqDto,
  ): Promise<ScheduledTaskResDto> => {
    const res = await globalFetch(`/scheduled-tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(req),
    });
    return res;
  };

  public static delete = async (id: string): Promise<void> => {
    const res = await globalFetch(`/scheduled-tasks/${id}`, {
      method: "DELETE",
    });
    return res;
  };
}
