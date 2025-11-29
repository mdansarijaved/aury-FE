import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";
import { UpsertForm, TFormSchema } from "./upsert-form";

import { useMutation } from "@tanstack/react-query";
import { PredefinedTasksApi } from "@/api/predefined-tasks/predefined-tasks.api";
import { queryClient } from "@/components/misc/app-query-provider";
import { PredefinedTaskResDto } from "@/api/predefined-tasks/predefined-tasks.dto";
import { toast } from "sonner";

type UpdateModalProps = {
  task: PredefinedTaskResDto;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const UpdateModal = ({ task, open, onOpenChange }: UpdateModalProps) => {
  const updateTaskMutation = useMutation({
    mutationFn: PredefinedTasksApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["predefined-tasks"] });
      onOpenChange(false);
      toast.success("Task updated successfully");
    },
  });

  const handleSubmit = (data: TFormSchema) => {
    // TODO: Implement update task
    // updateTaskMutation.mutate({ id: task.id, body: data });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>Edit a task</DialogDescription>
          </DialogHeader>

          <UpsertForm
            onSubmit={handleSubmit}
            defaultValues={{
              name: task.name,
              description: task.description,
            }}
            isSubmitting={updateTaskMutation.isPending}
          />
        </DialogContent>
      </form>
    </Dialog>
  );
};
