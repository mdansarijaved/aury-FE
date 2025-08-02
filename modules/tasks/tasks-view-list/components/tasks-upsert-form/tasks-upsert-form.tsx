import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskFormSchema, TTaskFormSchema } from "./tasks-upsert-form.schema";
import { useQuery } from "@tanstack/react-query";
import { PredefinedTasksApi } from "@/api/predefined-tasks/predefined-tasks.api";
import { Label } from "@/components/base/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/base/select";
import { Skeleton } from "@/components/base/skeleton";
import { Calendar, CalendarDayButton } from "@/components/base/calendar";
import { Input } from "@/components/base/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/base/popover";
import { Button } from "@/components/base/button";
import { ChevronDownIcon } from "lucide-react";
import dayjs from "dayjs";
import { useState } from "react";
import { AUPageError } from "@/components/aury/au-page-error";
import { AuForm } from "@/components/aury/au-form/au-form";

type TasksUpsertFormProps = {
  onSubmit: (data: TTaskFormSchema) => void;
  isSubmitting: boolean;
  defaultValues?: TTaskFormSchema;
};

export const TasksUpsertForm = ({
  onSubmit,
  isSubmitting,
  defaultValues,
}: TasksUpsertFormProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const form = useForm<TTaskFormSchema>({
    resolver: zodResolver(taskFormSchema),
    defaultValues,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: [PredefinedTasksApi.get.key],
    queryFn: PredefinedTasksApi.get.fn,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <AuForm.Select
        id="predefined-task"
        label="Predefined Task"
        items={data?.predefinedTasks.map((task) => ({
          label: task.name,
          value: task.id,
        }))}
        isLoading={isLoading}
        isError={isError}
        placeholder="Select predefined task"
        onChange={(value) => {
          form.setValue("predefinedTaskId", value);
        }}
      />

      <Controller
        name="scheduledOn"
        control={form.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className="flex gap-4">
            <AuForm.InputWrapper
              id="date-picker"
              label="Date"
              errorMessage={error?.message}
            >
              <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date-picker"
                    className="w-32 justify-between font-normal"
                  >
                    {value ? dayjs(value).format("DD/MM/YYYY") : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={value ? dayjs(value).toDate() : undefined}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      const oldDate = dayjs(value);
                      if (!oldDate.isValid()) {
                        onChange(date?.toISOString());
                        setShowDatePicker(false);
                        return;
                      }

                      const newDate = dayjs(date)
                        .set("hour", oldDate.hour())
                        .set("minute", oldDate.minute())
                        .set("second", oldDate.second());

                      onChange(newDate.toISOString());
                      setShowDatePicker(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </AuForm.InputWrapper>

            <AuForm.InputWrapper id="time-picker" label="Time">
              <Input
                type="time"
                id="time-picker"
                step="1"
                value={value ? dayjs(value).format("HH:mm:ss") : undefined}
                onChange={(e) => {
                  const [hours, minutes, seconds] = e.target.value.split(":");
                  const date = dayjs(value || new Date())
                    .set("hour", parseInt(hours))
                    .set("minute", parseInt(minutes))
                    .set("second", parseInt(seconds));

                  onChange(date.toISOString());
                }}
                className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </AuForm.InputWrapper>
          </div>
        )}
      />

      <Controller
        name="duration"
        control={form.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <AuForm.Input
            id="duration"
            label="Duration"
            onChange={(e) => onChange(+e.target.value)}
            value={value}
            errorMessage={error?.message}
          />
        )}
      />

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};
