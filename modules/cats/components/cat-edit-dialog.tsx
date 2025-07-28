import { Dialog, DialogContent, DialogTitle } from "@/components/base/dialog";
import { CatUpsertForm } from "./cat-upsert-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CustomersApi } from "@/api/customers/customers.api";
import { toast } from "sonner";
import {
  CustomerResDto,
  CustomerUpsertReqDto,
} from "@/api/customers/customers.dto";
import { CustomerTypeEnum } from "@/api/customers/customers.enums";
import { queryClient } from "@/components/misc/app-query-provider";
import { Skeleton } from "@/components/base/skeleton";
import { AUPageError } from "@/components/aury/au-page-error";

type CatEditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string;
};

export const CatEditDialog = ({
  open,
  onOpenChange,
  id,
}: CatEditDialogProps) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => CustomersApi.getCustomerById.fn(id),
    queryKey: [CustomersApi.getCustomerById.key, id],
  });

  const updateCatMutation = useMutation({
    mutationFn: (body: CustomerUpsertReqDto) =>
      CustomersApi.updateCustomer({
        id,
        body,
      }),
    onSuccess: () => {
      onOpenChange(false);
      toast.success("Cat updated successfully");
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
        <DialogTitle>Edit Cat</DialogTitle>

        {isLoading && <Skeleton />}

        {isError && <AUPageError />}

        {!!data && (
          <CatUpsertForm
            onSubmit={updateCatMutation.mutate}
            isSubmitting={updateCatMutation.isPending}
            defaultValues={data.customer}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
