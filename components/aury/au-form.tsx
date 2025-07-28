import { ReactNode } from "react";
import { Label } from "../base/label";
import { Text } from "../base/text";

type AuFormInputWrapperProps = {
  label?: string;
  children: ReactNode;
  errorMessage?: string;
};

const AuFormInputWrapper = ({
  label,
  children,
  errorMessage,
}: AuFormInputWrapperProps) => {
  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}

      {children}

      <Text as="s2" className="text-red-500">
        {errorMessage}
      </Text>
    </div>
  );
};

export const AuForm = {
  InputWrapper: AuFormInputWrapper,
};
