import dayjs from "dayjs";

export const getCatAge = (birthday: string | undefined) => {
  if (!birthday) return "";

  const years = dayjs().diff(dayjs(birthday), "year");

  if (years > 0) {
    return `${years} years`;
  }

  const months = dayjs().diff(dayjs(birthday), "month") % 12;

  if (months > 0) {
    return `${months} months`;
  }

  const days = dayjs().diff(dayjs(birthday), "day") % 30;
  return `${days} days`;
};
