import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/base/dialog";
import { CatUpsertForm } from "./cat-upsert-form";
import { useMutation } from "@tanstack/react-query";
import { CustomersApi } from "@/api/customers/customers.api";
import { CustomerUpsertReqDto } from "@/api/customers/customers.dto";
import {
  CustomerGenderEnum,
  CustomerTypeEnum,
} from "@/api/customers/customers.enums";
import { toast } from "sonner";
import { queryClient } from "@/components/misc/app-query-provider";

type CatAddDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CatAddDialog = ({ open, onOpenChange }: CatAddDialogProps) => {
  const createCatMutation = useMutation({
    mutationFn: CustomersApi.createCustomer,
    onSuccess: () => {
      onOpenChange(false);
      toast.success("Cat created successfully");
      queryClient.invalidateQueries({
        queryKey: [
          CustomersApi.getCustomerByType.key,
          CustomerTypeEnum.CAT,
        ],
      });
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton>
        <DialogTitle>Add Cat</DialogTitle>
        <DialogDescription>Add a new cat</DialogDescription>

        <CatUpsertForm
          onSubmit={createCatMutation.mutate}
          isSubmitting={createCatMutation.isPending}
          defaultValues={{
            name: "",
            gender: CustomerGenderEnum.MALE,
            type: CustomerTypeEnum.CAT,
            birthday: "",
            breed: "",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
