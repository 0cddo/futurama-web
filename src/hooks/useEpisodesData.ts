import useSWR from "swr";
import { API_ENDPOINT } from "../contstants";
import { fetcher } from "../utils/fetcher";

export const useEpisodesData = () => {
  return useSWR(`${API_ENDPOINT}/episodes`, fetcher);
};
