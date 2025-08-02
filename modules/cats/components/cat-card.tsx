import { TCustomer } from "@/api/customers/customers.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import { Text } from "@/components/base/text";
import { Cat } from "lucide-react";
import { useMemo, useState } from "react";
import { GENDER_LABEL_MAP } from "../cats.constants";
import { getCatAge } from "../cats.utils";
import { CatEditDialog } from "./cat-edit-dialog";

type CatCardProps = {
  cat: TCustomer;
};

// Function to get a random background color from beige, stone, and skin light colors
const getRandomBackgroundColor = () => {
  const colors = [
    "bg-amber-50", // Very light beige
    "bg-orange-50", // Very light skin tone
    "bg-amber-100", // Light beige
    "bg-stone-100", // Light stone
    "bg-orange-100", // Light skin tone
    "bg-neutral-50", // Very light neutral
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const CatCard = ({ cat }: CatCardProps) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const backgroundColor = useMemo(() => getRandomBackgroundColor(), []);

  const catDescription = useMemo(() => {
    const descriptions = [cat.breed, getCatAge(cat.birthday)].filter(Boolean);
    return descriptions.join(", ");
  }, [cat]);

  return (
    <>
      <Card
        className="w-50 border-none shadow-none cursor-pointer"
        onClick={() => setShowEditModal(true)}
      >
        <CardContent
          className={`flex items-center justify-center ${backgroundColor} rounded-lg`}
        >
          <Cat className="w-20 h-50" />
        </CardContent>
        <CardHeader className="flex items-center flex-col" hidden>
          <CardTitle>{cat.name}</CardTitle>
          <CardDescription>Cats Profile</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <Text>{cat.name}</Text>
          <Text as="s1" className="text-aury-500">
            {catDescription}
          </Text>
        </CardContent>
      </Card>

      <CatEditDialog
        id={cat.id}
        onOpenChange={setShowEditModal}
        open={showEditModal}
      />
    </>
  );
};
