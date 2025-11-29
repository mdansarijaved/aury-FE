import Link from "next/link";
import { Button } from "../base/button";
import { cn } from "@/lib/utils";

export type AuTabOption = {
  label: string;
  href: string;
  value: string;
};

type AuTabsProps = {
  tabs: AuTabOption[];
  value: string;
};

export const AuTabs = ({ tabs, value }: AuTabsProps) => {
  return (
    <div>
      {tabs.map((tab) => (
        <Button
          asChild
          variant="link"
          key={tab.value}
          className={cn(value === tab.value && "underline")}
        >
          <Link href={tab.href}>{tab.label}</Link>
        </Button>
      ))}
    </div>
  );
};
