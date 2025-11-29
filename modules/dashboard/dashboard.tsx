"use client";
import { Text } from "@/components/base/text";
import { CatsSummary } from "./components/cats-summary";
import { TaskTodayCard } from "./components/task-today-card";
import { IceCream } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { DashboardApi } from "@/api/dashboard/dashboard.api";
import { CustomerTypeEnum } from "@/api/customers/customers.enums";
import { AUPageError } from "@/components/aury/au-page-error";
import { Skeleton } from "@/components/base/skeleton";
import dayjs from "dayjs";
import { TasksApi } from "@/api/tasks/tasks.api";

export const Dashboard = () => {
  const today = dayjs().format("YYYY-MM-DD");

  const { data, isLoading, isError } = useQuery({
    queryKey: [DashboardApi.getCustomerSummary.key],
    queryFn: () =>
      DashboardApi.getCustomerSummary.fn({ type: CustomerTypeEnum.CAT }),
  });

  const {
    data: todayTasks,
    isLoading: isTodayTasksLoading,
    isError: isTodayTasksError,
  } = useQuery({
    queryKey: [TasksApi.getByDate.key, today],
    queryFn: () => TasksApi.getByDate.fn(today),
  });

  return (
    <div className="px-4">
      <Text as="h1">Dashboard</Text>
      <Text as="s2" className="text-aury-500 mt-3">
        Overview of your cats and their activities
      </Text>

      <div className="mt-5">
        <Text as="h2">Cats</Text>
        <div className="mt-8">
          {isError && <AUPageError />}

          {isLoading && <Skeleton className="h-60" />}

          {!!data && <CatsSummary cats={data} />}
        </div>
      </div>

      <div className="mt-4">
        <Text as="h2">Daily Care</Text>

        <div className="my-4">
          <div className="border p-6 rounded-lg">
            <Text>Total Whiskers Given Today</Text>
            <Text as="h1" className="mt-2">
              3
            </Text>
          </div>
        </div>
      </div>

      {isTodayTasksLoading && (
        <div className="space-y-2">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
        </div>
      )}

      {isTodayTasksError && <AUPageError />}

      {!!todayTasks && (
        <div>
          {todayTasks.tasks.map((task) => {
            const predefinedTask = task.predefinedTask

            return (
              <TaskTodayCard
                key={task.id}
                title={predefinedTask.name}
                description={predefinedTask.description ?? ""}
                time={dayjs(task.scheduledOn).format("h:mm a")}
                icon={<IceCream />}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
