import { Button } from "@/components/base/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";
import { useState } from "react";
import { TasksUpsertForm } from "./tasks-upsert-form/tasks-upsert-form";
import { TaskStatusEnum } from "@/api/tasks/tasks.enums";
import { useMutation } from "@tanstack/react-query";
import { TasksApi } from "@/api/tasks/tasks.api";
import { queryClient } from "@/components/misc/app-query-provider";
import dayjs from "dayjs";
import { toast } from "sonner";

export const TasksAdd = () => {
  const [isOpen, setIsOpen] = useState(false);

  const createTaskMutation = useMutation({
    mutationFn: TasksApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TasksApi.get.key] });
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Failed to create task");
    },
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Add Task</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription hidden>Add a new task</DialogDescription>
        </DialogHeader>

        <TasksUpsertForm
          defaultValues={{
            predefinedTaskId: "",
            scheduledOn: dayjs().toISOString(),
            duration: 0,
            status: TaskStatusEnum.PENDING,
          }}
          onSubmit={createTaskMutation.mutate}
          isSubmitting={createTaskMutation.isPending}
        />
      </DialogContent>
    </Dialog>
  );
};
