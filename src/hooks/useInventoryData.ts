import useSWR from "swr";
import { API_ENDPOINT } from "../contstants";
import { fetcher } from "../utils/fetcher";

export const useInventoryData = () => {
  return useSWR(`${API_ENDPOINT}/inventory`, fetcher);
};
