import { AuTable } from "@/components/aury/au-table";
import { Text } from "@/components/base/text";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dayjs from "dayjs";

export const CatsSummary = () => {
  const cats = [
    {
      id: 1,
      name: "Aury",
      age: 1,
      breed: "Desi",
      gender: "Female",
      lastFed: "2025-01-01",
    },
    {
      id: 2,
      name: "Bella",
      age: 2,
      breed: "Persian",
      gender: "Female",
      lastFed: "2025-01-01",
    },
  ];

  const columnHelper = createColumnHelper<(typeof cats)[number]>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("age", {
      header: "Age",
      cell: ({ row }) => {
        return (
          <Text as="s1" className="text-aury-500">
            {row.original.age}
          </Text>
        );
      },
    }),
    columnHelper.accessor("breed", {
      header: "Breed",
      cell: ({ row }) => {
        return (
          <Text as="s1" className="text-aury-500">
            {row.original.breed}
          </Text>
        );
      },
    }),
    columnHelper.accessor("gender", {
      header: "Gender",
      cell: ({ row }) => {
        return (
          <Text as="s1" className="text-aury-500">
            {row.original.gender}
          </Text>
        );
      },
    }),
    columnHelper.accessor("lastFed", {
      header: "Last Fed",
      cell: ({ row }) => {
        return (
          <Text as="s1" className="text-aury-500">
            {dayjs(row.original.lastFed).format("DD MMM")}
          </Text>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: cats,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <AuTable table={table} />;
};
