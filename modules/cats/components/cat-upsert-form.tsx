import {
  CustomerGenderEnum,
  CustomerTypeEnum,
} from "@/api/customers/customers.enums";
import { AuForm } from "@/components/aury/au-form/au-form";
import { Button } from "@/components/base/button";
import { Calendar } from "@/components/base/calendar";
import { Input } from "@/components/base/input";
import { Label } from "@/components/base/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/base/popover";
import { RadioGroup, RadioGroupItem } from "@/components/base/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { ChevronDownIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  breed: z.string().min(1, { message: "Breed is required" }).optional(),
  gender: z.enum(CustomerGenderEnum, { message: "Gender is required" }),
  type: z.enum(CustomerTypeEnum),
  birthday: z.string().optional(),
});

type TFormSchema = z.infer<typeof formSchema>;

type CatUpsertFormProps = {
  onSubmit: (data: TFormSchema) => void;
  isSubmitting: boolean;
  defaultValues: TFormSchema;
};

export const CatUpsertForm = ({
  onSubmit,
  isSubmitting,
  defaultValues,
}: CatUpsertFormProps) => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <AuForm.InputWrapper
        label="Name"
        errorMessage={form.formState.errors.name?.message}
      >
        <Input id="name" {...form.register("name")} placeholder="Enter name" />
      </AuForm.InputWrapper>

      <AuForm.InputWrapper
        label="Breed"
        errorMessage={form.formState.errors.breed?.message}
      >
        <Input
          id="breed"
          {...form.register("breed")}
          placeholder="Enter breed"
        />
      </AuForm.InputWrapper>

      <AuForm.InputWrapper
        label="Gender"
        errorMessage={form.formState.errors.gender?.message}
      >
        <RadioGroup
          value={form.watch("gender")}
          onValueChange={(value) =>
            form.setValue("gender", value as CustomerGenderEnum)
          }
          className="flex"
        >
          <div className="flex flex-1 items-center gap-2">
            <RadioGroupItem
              value={CustomerGenderEnum.MALE}
              id={CustomerGenderEnum.MALE}
            />
            <Label htmlFor={CustomerGenderEnum.MALE}>Male</Label>
          </div>
          <div className="flex flex-1 items-center gap-2">
            <RadioGroupItem
              value={CustomerGenderEnum.FEMALE}
              id={CustomerGenderEnum.FEMALE}
            />
            <Label htmlFor={CustomerGenderEnum.FEMALE}>Female</Label>
          </div>
        </RadioGroup>
      </AuForm.InputWrapper>

      <Controller
        control={form.control}
        name="birthday"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <AuForm.InputWrapper
            label="Date of birth"
            errorMessage={error?.message}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-48 justify-between font-normal"
                >
                  {value ? dayjs(value).format("DD MMM 'YY") : "Select date"}
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
                    onChange(dayjs(date).format("YYYY-MM-DD"));
                  }}
                />
              </PopoverContent>
            </Popover>
          </AuForm.InputWrapper>
        )}
      />

      <Button type="submit" disabled={isSubmitting} className="ml-auto">
        Submit
      </Button>
    </form>
  );
};
