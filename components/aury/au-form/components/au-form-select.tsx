import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/base/select";
import { AuFormWrapper, AuFormWrapperCommonProps } from "./au-form-wrapper";
import { Skeleton } from "@/components/base/skeleton";
import { AUPageError } from "../../au-page-error";
import { cn } from "@/lib/utils";

type TSelectItem = {
  label: string;
  value: string;
};

type AuFormSelectProps = AuFormWrapperCommonProps & {
  size?: "sm" | "default";
  placeholder?: string;
  items?: TSelectItem[];
  isLoading?: boolean;
  isError?: boolean;
  id: string;
  onChange: (value: string) => void;
};

export const AuFormSelect = ({
  label,
  errorMessage,
  items,
  isLoading,
  isError,
  size = "default",
  placeholder,
  id,
  onChange,
}: AuFormSelectProps) => {
  return (
    <AuFormWrapper id={id} label={label} errorMessage={errorMessage}>
      <Select onValueChange={onChange}>
        <SelectTrigger
          id={id}
          className={cn(size === "default" && "w-full")}
          size={size}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {isLoading && <Skeleton className="h-40" />}

          {isError && <AUPageError />}

          {items?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </AuFormWrapper>
  );
};
