import { TCustomer } from "@/api/customers/customers.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/base/card";
import { Cat } from "lucide-react";

type CatCardProps = {
  cat: TCustomer;
};

export const CatCard = ({ cat }: CatCardProps) => {
  return <Card className="w-60">
    <CardHeader className="flex items-center flex-col">
      <CardTitle>{cat.name}</CardTitle>
      <CardDescription>{cat.breed}</CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center">
      <Cat className="w-20 h-20" />
    </CardContent>
  </Card>;
};
