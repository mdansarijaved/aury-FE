import { Text } from "@/components/base/text";

type TaskTodayCardProps = {
  title: string;
  description?: string;
  time: string;
  icon: React.ReactNode;
};

export const TaskTodayCard = ({
  title,
  description,
  time,
  icon,
}: TaskTodayCardProps) => {
  return (
    <div className="px-4 py-3 flex bg-gray-50 items-center">
      <div className="p-3 bg-aury-100 rounded-lg mr-3">{icon}</div>
      <div>
        <Text>{title}</Text>
        {description && (
          <Text as="s2" className="text-aury-500">
            {description}
          </Text>
        )}
      </div>

      <Text as="s2" className="text-aury-500 ml-auto">
        {time}
      </Text>
    </div>
  );
};
