import { TaskResDto } from "@/api/tasks/tasks.dto";
import { DropdownMenuContent } from "@/components/base/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/base/dropdown-menu";
import { DropdownMenu } from "@/components/base/dropdown-menu";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import { Button } from "@/components/base/button";
import { EllipsisVertical } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { TasksApi } from "@/api/tasks/tasks.api";
import { queryClient } from "@/components/misc/app-query-provider";

type TaskItemProps = {
  task: TaskResDto;
};

export const TaskItem = ({ task }: TaskItemProps) => {
  const editTaskMutation = useMutation({
    mutationFn: TasksApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: TasksApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <Card key={task.id} className="shadow-none">
      <CardHeader>
        <CardTitle>{task.name}</CardTitle>

        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <EllipsisVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => deleteTaskMutation.mutate(task.id)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
    </Card>
  );
};
