import { TaskStatusEnum } from "@/api/tasks/tasks.enums";
import z from "zod";

export const taskFormSchema = z.object({
  predefinedTaskId: z.string().min(1),
  scheduledOn: z.string().min(1),
  duration: z.number().min(1),
  status: z.enum(TaskStatusEnum),
  assignedTo: z.string().optional(),
});

export type TTaskFormSchema = z.infer<typeof taskFormSchema>;
