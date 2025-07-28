import { CustomerGenderEnum, CustomerTypeEnum } from "./customers.enums";

export type TCustomer = {
  id: string;
  name: string;
  gender: CustomerGenderEnum;
  type: CustomerTypeEnum;
  birthday?: string;
  breed?: string;
};
