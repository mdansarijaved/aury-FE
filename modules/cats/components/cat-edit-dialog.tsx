import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/base/dialog";
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
import { Delete, DeleteIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/base/button";
import { useState } from "react";

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
        queryKey: [CustomersApi.getCustomerByType.key, CustomerTypeEnum.CAT],
      });
    },
  });

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton>
        <div className="flex items-center justify-between">
          <DialogTitle>Edit Cat</DialogTitle>
          <div className="flex items-center gap-2 mr-8 text-red-500 cursor-pointer">
            <Trash2
              className="w-4 h-4"
              onClick={() => setIsDeleteDialogOpen(true)}
            />
            <span className="sr-only">Delete Cat</span>
          </div>
        </div>

        {isLoading && <Skeleton />}

        {isError && <AUPageError />}

        {!!data && (
          <CatUpsertForm
            onSubmit={updateCatMutation.mutate}
            isSubmitting={updateCatMutation.isPending}
            defaultValues={data.customer}
          />
        )}

        <ConfirmDeleteDialog
          open={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          id={id}
        />
      </DialogContent>
    </Dialog>
  );
};

type ConfirmDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string;
};

const ConfirmDeleteDialog = ({
  open,
  onOpenChange,
  id,
}: ConfirmDeleteDialogProps) => {
  const deleteCatMutation = useMutation({
    mutationFn: CustomersApi.deleteCustomer,
    onSuccess: () => {
      onOpenChange(false);
      toast.success("Cat deleted successfully");
      queryClient.invalidateQueries({
        queryKey: [CustomersApi.getCustomerByType.key, CustomerTypeEnum.CAT],
      });
    },
  });
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton>
        <DialogTitle>Delete Cat</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this cat?
        </DialogDescription>

        <div className="flex items-center justify-end">
          <Button
            variant="destructive"
            onClick={() => deleteCatMutation.mutate(id)}
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
