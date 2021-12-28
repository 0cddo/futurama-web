import useSWR from "swr";
import { API_ENDPOINT } from "../contstants";
import { fetcher } from "../utils/fetcher";

export const useHomeData = () => {
  return useSWR(`${API_ENDPOINT}/home`, fetcher);
};
