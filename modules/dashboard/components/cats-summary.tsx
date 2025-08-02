import { CustomerGenderEnum } from "@/api/customers/customers.enums";
import { CustomersSummaryResDto, CustomerSummaryResDto } from "@/api/dashboard/dashboard.dto";
import { AuTable } from "@/components/aury/au-table";
import { Text } from "@/components/base/text";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dayjs from "dayjs";

type CatsSummaryProps = {
  cats: CustomersSummaryResDto;
};

// Helper function to format age in a readable format
const formatAge = (birthday: string) => {
  const now = dayjs();
  const birthDate = dayjs(birthday);
  const years = now.diff(birthDate, 'year');
  const months = now.diff(birthDate, 'month') % 12;
  const days = now.diff(birthDate, 'day') % 30;

  if (years > 0) {
    return `${years} Year${years > 1 ? 's' : ''}`;
  } else if (months > 0) {
    return `${months} Month${months > 1 ? 's' : ''}`;
  } else {
    return `${days} Day${days > 1 ? 's' : ''}`;
  }
};

const formatGender = (gender: CustomerGenderEnum) => {
  return gender === CustomerGenderEnum.MALE ? "Male" : "Female";
};

export const CatsSummary = ({ cats }: CatsSummaryProps) => {
  const columnHelper = createColumnHelper<CustomerSummaryResDto>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("birthday", {
      header: "Age",
      cell: ({ row }) => {
        return (
          <Text as="s1" className="text-aury-500">
            {formatAge(row.original.birthday)}
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
            {formatGender(row.original.gender)}
          </Text>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: cats.customers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <AuTable table={table} />;
};
