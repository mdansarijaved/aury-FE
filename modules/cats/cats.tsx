"use client";
import { Button } from "@/components/base/button";
import { Text } from "@/components/base/text";
import { useQuery } from "@tanstack/react-query";
import { CustomersApi } from "@/api/customers/customers.api";
import { CustomerTypeEnum } from "@/api/customers/customers.enums";
import { AUPageError } from "@/components/aury/au-page-error";
import { CatSkeleton } from "./components/cat-skeleton";
import { CatCard } from "./components/cat-card";
import { useState } from "react";
import { CatAddDialog } from "./components/cat-add-dialog";

export const Cats = () => {
  const [open, setOpen] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: [CustomersApi.getCustomerByType.key, CustomerTypeEnum.CAT],
    queryFn: () => CustomersApi.getCustomerByType.fn(CustomerTypeEnum.CAT),
  });

  return (
    <>
      <div className="px-4 my-9">
        <div className="flex">
          <Text as="h1">Cats</Text>
          <Button className="ml-auto" onClick={() => setOpen(true)}>
            Add Cat
          </Button>
        </div>

        <div className="flex gap-4 mt-6">
          {isError && <AUPageError />}

          {isLoading &&
            Array.from({ length: 10 }).map((_, index) => (
              <CatSkeleton key={index} />
            ))}

          {data?.customers.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>

      <CatAddDialog open={open} onOpenChange={setOpen} />
    </>
  );
};
