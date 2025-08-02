import { TaskResDto, TasksResDto } from "@/api/tasks/tasks.dto";
import { AuTable } from "@/components/aury/au-table";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

type TasksTableProps = {
  data: TasksResDto;
};

export const TasksTable = ({ data }: TasksTableProps) => {
  const columnHelper = createColumnHelper<TaskResDto>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "ID",
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <AuTable table={table} />;
};
