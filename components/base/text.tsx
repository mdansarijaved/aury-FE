import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva([], {
  variants: {
    as: {
      h1: ["text-3xl font-bold"],
      h2: ["text-2xl font-bold"],
      h3: ["text-xl font-bold"],
      h4: ["text-lg font-bold"],
      b1: ["text-base font-medium"],
      b2: ["text-sm font-medium"],
      s1: ["text-sm font-medium"],
      s2: ["text-xs font-medium"],
    },
  },
  defaultVariants: {
    as: "b1",
  },
});

type TText = typeof textVariants;
type TTextVariant = NonNullable<VariantProps<TText>["as"]>;

type THeadings = "h1" | "h2" | "h3" | "h4";
type TBody = "p" | "span" | "div";

const TEXT_VARIANT_TO_HTML_TAG: Record<TTextVariant, THeadings | TBody> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  b1: "p",
  b2: "p",
  s1: "div",
  s2: "div",
};

type ElementType = React.HTMLAttributes<
  HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement
>;

type Props = VariantProps<TText> &
  ElementType & {
    children: React.ReactNode;
    className?: string;
  };

export const Text = ({ as, children, className, ...props }: Props) => {
  const Component = TEXT_VARIANT_TO_HTML_TAG[as || "b1"];

  return (
    <Component className={cn(textVariants({ as }), className)} {...props}>
      {children}
    </Component>
  );
};
