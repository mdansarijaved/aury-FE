import { globalFetch } from "../global.fetch";
import {
  CustomerCreateReqDto,
  CustomerResDto,
  CustomersResDto,
  CustomerUpdateReqDto,
} from "./customers.dto";
import { CustomerTypeEnum } from "./customers.enums";

export class CustomersApi {
  public static get = async (): Promise<CustomersResDto> => {
    const res = await globalFetch("/customers");

    return res;
  };

  public static getCustomerByType = async (
    type: CustomerTypeEnum,
  ): Promise<CustomersResDto> => {
    const res = await globalFetch(`/customers/type/${type}`);

    return res;
  };

  public static getCustomerById = async (
    id: string,
  ): Promise<CustomerResDto> => {
    const res = await globalFetch(`/customers/${id}`);

    return res;
  };

  public static createCustomer = async (
    body: CustomerCreateReqDto,
  ): Promise<CustomerResDto> => {
    const res = await globalFetch("/customers", {
      method: "POST",
      body: JSON.stringify(body),
    });

    return res;
  };

  public static updateCustomer = async (
    id: string,
    body: CustomerUpdateReqDto,
  ): Promise<CustomerResDto> => {
    const res = await globalFetch(`/customers/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });

    return res;
  };

  public static deleteCustomer = async (id: string): Promise<void> => {
    await globalFetch(`/customers/${id}`, {
      method: "DELETE",
    });
  };
}
