"use client";
import { Button } from "@/components/base/button";
import { Text } from "@/components/base/text";
import { useQuery } from "@tanstack/react-query";
import { CustomersApi } from "@/api/customers/customers.api";
import { CustomerTypeEnum } from "@/api/customers/customers.enums";
import { AUPageError } from "@/components/aury/au-page-error";
import { CatSkeleton } from "./components/cat-skeleton";
import { CatCard } from "./components/cat-card";

export const Cats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["CustomersApi.getCustomerByType", CustomerTypeEnum.CAT],
    queryFn: () => CustomersApi.getCustomerByType(CustomerTypeEnum.CAT),
  });

  return (
    <div className="mx-6">
      <div className="flex">
        <Text as="h1">Cats</Text>
        <Button className="ml-auto">Add Cat</Button>
      </div>

      <div className="flex gap-4 mt-6">
        {isError && <AUPageError />}

        {isLoading && (
          Array.from({ length: 10 }).map((_, index) => (
            <CatSkeleton key={index} />
          ))
        )}

        {data?.customers.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};
