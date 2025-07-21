"use client";

import { useQuery } from "@tanstack/react-query";
import { TasksApi } from "@/api/tasks/tasks.api";
import { TaskAddModal } from "./components/task-add-modal";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import { Skeleton } from "@/components/base/skeleton";
import { TaskItem } from "./components/task-item";

export const TaskList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: TasksApi.get,
  });

  return (
    <div className="mx-6 my-10">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
          <CardDescription>List of tasks for Aury</CardDescription>
          <CardAction>
            <TaskAddModal />
          </CardAction>
        </CardHeader>

        <CardContent className="space-y-2">
          {isLoading && (
            <>
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
            </>
          )}

          {data?.tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
