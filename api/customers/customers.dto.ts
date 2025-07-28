import { TCustomer } from "./customers.types";

export type CustomerResDto = {
  customer: TCustomer;
};

export type CustomersResDto = {
  customers: TCustomer[];
};

export type CustomerUpsertReqDto = {
  name: string;
  gender: string;
  type?: string;
  birthday?: string;
  breed?: string;
};

export type CustomerUpdateReqDto = {
  id: string;
  body: CustomerUpsertReqDto;
};

export type CustomerCreateReqDto = CustomerUpsertReqDto;
