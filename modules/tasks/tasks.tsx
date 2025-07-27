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
import { AUBack } from "@/components/aury/au-back";
import { useRouter } from "next/navigation";
import { Text } from "@/components/base/text";

export const TaskList = () => {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: TasksApi.get,
  });

  return (
    <div className="mx-6">
      <AUBack onClick={router.back} className="mb-4" />

      <div>
        <div className="flex items-center justify-between">
          <div>
            <Text as="h1">Tasks</Text>
            <Text className="text-aury-500">List of tasks for Aury</Text>
          </div>

          <div>
            <TaskAddModal />
          </div>
        </div>

        <div className="space-y-2 mt-4">
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
        </div>
      </div>
    </div>
  );
};
