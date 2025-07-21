import { DialogClose } from "@/components/base/dialog";
import { Button } from "@/components/base/button";
import { DialogFooter } from "@/components/base/dialog";
import { Input } from "@/components/base/input";
import { Label } from "@/components/base/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

export type TFormSchema = z.infer<typeof formSchema>;

type TaskUpsertFormProps = {
  onSubmit: (data: TFormSchema) => void;
  defaultValues?: TFormSchema;
  isSubmitting: boolean;
};

export const TaskUpsertForm = ({
  onSubmit,
  defaultValues,
  isSubmitting,
}: TaskUpsertFormProps) => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...form.register("name")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input id="description" {...form.register("description")} />
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button
          type="submit"
          onClick={form.handleSubmit(onSubmit)}
          disabled={isSubmitting}
        >
          Save
        </Button>
      </DialogFooter>
    </>
  );
};
