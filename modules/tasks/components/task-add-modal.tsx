import { TasksApi } from "@/api/tasks/tasks.api";
import { Button } from "@/components/base/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";
import { queryClient } from "@/components/misc/app-query-provider";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { TaskUpsertForm, TFormSchema } from "./task-upsert-form";
import { toast } from "sonner";

export const TaskAddModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const createTaskMutation = useMutation({
    mutationFn: TasksApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task created successfully");
      setIsOpen(false);
    },
  });

  const handleSubmit = (data: TFormSchema) => {
    createTaskMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add Task</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>Add a new task to your list</DialogDescription>
          </DialogHeader>

          <TaskUpsertForm
            onSubmit={handleSubmit}
            defaultValues={{
              name: "",
              description: "",
            }}
            isSubmitting={createTaskMutation.isPending}
          />
        </DialogContent>
      </form>
    </Dialog>
  );
};
