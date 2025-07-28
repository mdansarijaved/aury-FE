import { globalFetch } from "../global.fetch";
import {
  CustomerCreateReqDto,
  CustomerResDto,
  CustomersResDto,
  CustomerUpdateReqDto,
  CustomerUpsertReqDto,
} from "./customers.dto";
import { CustomerTypeEnum } from "./customers.enums";

export class CustomersApi {
  public static get = {
    key: "CustomersApi.get",
    fn: async (): Promise<CustomersResDto> => {
      const res = await globalFetch("/customers");

      return res;
    },
  };

  public static getCustomerByType = {
    key: "CustomersApi.getCustomerByType",
    fn: async (type: CustomerTypeEnum): Promise<CustomersResDto> => {
      const res = await globalFetch(`/customers/type/${type}`);

      return res;
    },
  };

  public static getCustomerById = {
    key: "CustomersApi.getCustomerById",
    fn: async (id: string): Promise<CustomerResDto> => {
      const res = await globalFetch(`/customers/${id}`);

      return res;
    },
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

  public static updateCustomer = async ({
    body,
    id,
  }: CustomerUpdateReqDto): Promise<CustomerResDto> => {
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
