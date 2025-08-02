import { Input } from "@/components/base/input";
import { AuFormWrapper, AuFormWrapperCommonProps } from "./au-form-wrapper";

type AuFormInputProps = AuFormWrapperCommonProps &
  React.ComponentProps<"input">;

export const AuFormInput = ({
  label,
  errorMessage,
  ...props
}: AuFormInputProps) => {
  return (
    <AuFormWrapper id={props.id} label={label} errorMessage={errorMessage}>
      <Input {...props} />
    </AuFormWrapper>
  );
};
