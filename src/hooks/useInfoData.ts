import useSWR from "swr";
import { API_ENDPOINT } from "../contstants";
import { fetcher } from "../utils/fetcher";

export const useInfoData = () => {
  return useSWR(`${API_ENDPOINT}/info`, fetcher);
};
