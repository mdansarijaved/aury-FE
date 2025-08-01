import { PredefinedTaskResDto } from "@/api/predefined-tasks/predefined-tasks.dto";
import { DropdownMenuContent } from "@/components/base/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/base/dropdown-menu";
import { DropdownMenu } from "@/components/base/dropdown-menu";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import { Button } from "@/components/base/button";
import { EllipsisVertical } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { PredefinedTasksApi } from "@/api/predefined-tasks/predefined-tasks.api";
import { queryClient } from "@/components/misc/app-query-provider";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/base/alert-dialog";
import { useState } from "react";
import { UpdateModal } from "./update-modal";
import { toast } from "sonner";

type ItemProps = {
  task: PredefinedTaskResDto;
};

export const Item = ({ task }: ItemProps) => {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const deleteTaskMutation = useMutation({
    mutationFn: PredefinedTasksApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["predefined-tasks"] });
      toast.success("Task deleted successfully");
      setIsDeleteConfirmationOpen(false);
    },
  });

  return (
    <>
      <Card key={task.id} className="shadow-none">
        <CardHeader>
          <CardTitle>{task.name}</CardTitle>
          <CardDescription className="text-aury-500">
            {task.description}
          </CardDescription>

          <CardAction>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <EllipsisVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setIsEditModalOpen(true)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setIsDeleteConfirmationOpen(true)}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
      </Card>

      <AlertDialog
        open={isDeleteConfirmationOpen}
        onOpenChange={setIsDeleteConfirmationOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              task and related scheduled tasks.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                deleteTaskMutation.mutate(task.id);
              }}
              disabled={deleteTaskMutation.isPending}
            >
              {deleteTaskMutation.isPending ? "Deleting..." : "Confirm"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <UpdateModal
        task={task}
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
      />
    </>
  );
};
