import { globalFetch } from "../global.fetch";
import {
  CustomersSummaryReqDto,
  CustomersSummaryResDto,
} from "./dashboard.dto";

export class DashboardApi {
  public static getCustomerSummary = {
    key: "DashboardApi.getCustomerSummary",
    fn: async (
      query: CustomersSummaryReqDto,
    ): Promise<CustomersSummaryResDto> => {
      const res = await globalFetch(
        `/dashboard/customer/summary?${new URLSearchParams(query).toString()}`,
      );

      return res;
    },
  };
}
