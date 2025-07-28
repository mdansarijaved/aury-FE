import { globalFetch } from "../global.fetch";
import {
  CustomerCreateReqDto,
  CustomerResDto,
  CustomersResDto,
  CustomerUpdateReqDto,
} from "./customers.dto";

export class CustomersApi {
  static get = async (): Promise<CustomersResDto> => {
    const { data } = await globalFetch("/customers");

    return data;
  };

  static getCustomerByType = async (type: string): Promise<CustomersResDto> => {
    const { data } = await globalFetch(`/customers/type/${type}`);

    return data;
  };

  static getCustomerById = async (id: string): Promise<CustomerResDto> => {
    const { data } = await globalFetch(`/customers/${id}`);

    return data;
  };

  static createCustomer = async (
    body: CustomerCreateReqDto,
  ): Promise<CustomerResDto> => {
    const { data } = await globalFetch("/customers", {
      method: "POST",
      body: JSON.stringify(body),
    });

    return data;
  };

  static updateCustomer = async (
    id: string,
    body: CustomerUpdateReqDto,
  ): Promise<CustomerResDto> => {
    const { data } = await globalFetch(`/customers/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });

    return data;
  };

  static deleteCustomer = async (id: string): Promise<void> => {
    await globalFetch(`/customers/${id}`, {
      method: "DELETE",
    });
  };
}
