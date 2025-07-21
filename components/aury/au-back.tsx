import Link from "next/link";
import { Button } from "../base/button";
import { ArrowLeftIcon } from "lucide-react";

type AUBackProps = {
  onClick: () => void;
  className?: string;
};

export const AUBack = ({ onClick, className }: AUBackProps) => {
  return (
    <Button variant="ghost" onClick={onClick} className={className}>
      <ArrowLeftIcon className="h-4 w-4" />
      Back
    </Button>
  );
};
