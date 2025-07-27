import { globalFetch } from "../global.fetch";
import {
  PredefinedTaskResDto,
  PredefinedTasksResDto,
  PredefinedTaskUpdateReqDto,
  PredefinedTaskUpsertReqDto,
} from "./predefined-tasks.dto";

export class PredefinedTasksApi {
  public static get = async (): Promise<PredefinedTasksResDto> => {
    const res = await globalFetch("/predefined-tasks");
    return res;
  };

  public static getById = async (id: string): Promise<PredefinedTaskResDto> => {
    const res = await globalFetch(`/predefined-tasks/${id}`);
    return res;
  };

  public static create = async (
    req: PredefinedTaskUpsertReqDto,
  ): Promise<PredefinedTaskResDto> => {
    const res = await globalFetch("/predefined-tasks", {
      method: "POST",
      body: JSON.stringify(req),
    });
    return res;
  };

  public static update = async ({
    body,
    id,
  }: PredefinedTaskUpdateReqDto): Promise<PredefinedTaskResDto> => {
    const res = await globalFetch(`/predefined-tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    return res;
  };

  public static delete = async (id: string): Promise<void> => {
    const res = await globalFetch(`/predefined-tasks/${id}`, {
      method: "DELETE",
    });
    return res;
  };
}
