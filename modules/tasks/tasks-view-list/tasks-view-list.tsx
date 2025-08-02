"use client";

import { TasksApi } from "@/api/tasks/tasks.api";
import { Skeleton } from "@/components/base/skeleton";
import { Text } from "@/components/base/text";
import { useQuery } from "@tanstack/react-query";
import { TasksTable } from "./components/tasks-table";
import { AUPageError } from "@/components/aury/au-page-error";
import { TasksAdd } from "./components/tasks-add";

export const TasksViewList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [TasksApi.get.key],
    queryFn: TasksApi.get.fn,
  });

  return (
    <>
      <div className="px-4">
        <div className="flex items-center justify-between">
          <Text as="h1" className="mb-4">
            Tasks
          </Text>
          <TasksAdd />
        </div>

        {isError && <AUPageError />}

        {isLoading && <Skeleton className="h-80" />}

        {data && <TasksTable data={data} />}
      </div>
    </>
  );
};
