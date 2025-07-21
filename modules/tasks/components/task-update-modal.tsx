import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";
import { TaskUpsertForm, TFormSchema } from "./task-upsert-form";
import { Button } from "@/components/base/button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { TasksApi } from "@/api/tasks/tasks.api";
import { queryClient } from "@/components/misc/app-query-provider";
import { TaskResDto } from "@/api/tasks/tasks.dto";
type TaskUpdateModalProps = {
  task: TaskResDto;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const TaskUpdateModal = ({
  task,
  open,
  onOpenChange,
}: TaskUpdateModalProps) => {
  const updateTaskMutation = useMutation({
    mutationFn: TasksApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      onOpenChange(false);
    },
  });

  const handleSubmit = (data: TFormSchema) => {
    updateTaskMutation.mutate({ id: task.id, body: data });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>Edit a task</DialogDescription>
          </DialogHeader>

          <TaskUpsertForm
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
