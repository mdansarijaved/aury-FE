import {
  CustomerGenderEnum,
  CustomerTypeEnum,
} from "../customers/customers.enums";

export type CustomersSummaryReqDto = {
  type?: CustomerTypeEnum;
};

export type CustomerSummaryResDto = {
  id: string;
  name: string;
  type: CustomerTypeEnum;
  gender: CustomerGenderEnum;
  breed: string;
  birthday: string;
};

export type CustomersSummaryResDto = {
  total: number;
  customers: CustomerSummaryResDto[];
};
