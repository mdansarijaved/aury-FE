import relativeTime from "dayjs/plugin/relativeTime";
import { TaskResDto, TasksResDto } from "@/api/tasks/tasks.dto";
import { AuTable } from "@/components/aury/au-table";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import { useMemo } from "react";

type TasksTableProps = {
  data: TasksResDto;
};

export const TasksTable = ({ data }: TasksTableProps) => {
  const columnHelper = createColumnHelper<TaskResDto>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("predefinedTask.name", {
        header: "Task Name",
      }),
      columnHelper.accessor("scheduledOn", {
        header: "Scheduled On",
        cell: (row) => {
          const date = dayjs(row.getValue());

          if (date.isSame(dayjs(), "day")) {
            return `${date.format("HH:mm a")} today`;
          }

          return date.format("DD MM HH:mm a");
        },
      }),
      columnHelper.display({
        id: "timeLeft",
        header: "Time Left",
        cell: ({ row }) => {
          dayjs.extend(relativeTime);
          const date = dayjs(row.original.scheduledOn);

          return date.fromNow();
        },
      }),
      columnHelper.accessor("duration", {
        header: "Duration",
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    data: data.tasks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <AuTable table={table} />;
};
