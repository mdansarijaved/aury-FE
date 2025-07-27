"use client";

import { useQuery } from "@tanstack/react-query";
import { PredefinedTasksApi } from "@/api/predefined-tasks/predefined-tasks.api";
import { AddModal } from "./components/add-modal";
import { Skeleton } from "@/components/base/skeleton";
import { Item } from "./components/item";
import { AUBack } from "@/components/aury/au-back";
import { useRouter } from "next/navigation";
import { Text } from "@/components/base/text";

export const PredefinedTasks = () => {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["predefined-tasks"],
    queryFn: PredefinedTasksApi.get,
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
            <AddModal />
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

          {data?.predefinedTasks.map((task) => (
            <Item key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};
