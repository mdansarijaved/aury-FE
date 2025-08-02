"use client";
import { Text } from "@/components/base/text";
import { CatsSummary } from "./components/cats-summary";
import { TaskTodayCard } from "./components/task-today-card";
import { IceCreamCone, Scissors } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="my-5">
      <div className="p-4">
        <Text as="h1">Dashboard</Text>
        <Text as="s2" className="text-aury-500 mt-3">
          Overview of your cats and their activities
        </Text>
      </div>

      <div className="p-4 mt-1">
        <Text as="h2">Cats</Text>
        <div className="mt-8">
          <CatsSummary />
        </div>
      </div>

      <div className="p-4">
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

      <div>
        <TaskTodayCard
          title="Whiskers"
          description="Feeding"
          time="10:00 AM"
          icon={<IceCreamCone />}
        />
        <TaskTodayCard
          title="Kittens"
          description="Grooming"
          time="10:00 AM"
          icon={<Scissors />}
        />
        <TaskTodayCard
          title="Vet"
          description="Rashmi Aunty ke therapy"
          time="10:00 AM"
          icon={<Scissors />}
        />
      </div>
    </div>
  );
};
