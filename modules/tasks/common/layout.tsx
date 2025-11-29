"use client";
import { AuTabs } from "@/components/aury/au-tabs";

import { ROUTES } from "@/routes/routes";
import { usePathname } from "next/navigation";

export const TasksLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="px-4 space-y-4">
      <AuTabs
        tabs={[
          {
            label: "Tasks",
            href: ROUTES.tasks.root,
            value: ROUTES.tasks.root,
          },
          {
            label: "Predefined Tasks",
            href: ROUTES.tasks.predefinedTasks.root,
            value: ROUTES.tasks.predefinedTasks.root,
          },
        ]}
        value={pathname}
      />

      {children}
    </div>
  );
};
