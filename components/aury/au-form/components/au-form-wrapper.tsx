import { Label } from "@/components/base/label";
import { Text } from "@/components/base/text";
import { ReactNode } from "react";

export type AuFormWrapperCommonProps = {
  label?: string;
  errorMessage?: string;
  id?: string;
};

type AuFormWrapperProps = AuFormWrapperCommonProps & {
  children: ReactNode;
};

export const AuFormWrapper = ({
  label,
  children,
  errorMessage,
  id,
}: AuFormWrapperProps) => {
  return (
    <div className="space-y-2">
      {label && <Label htmlFor={id}>{label}</Label>}

      {children}

      <Text as="s2" className="text-red-500">
        {errorMessage}
      </Text>
    </div>
  );
};
