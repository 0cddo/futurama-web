import useSWR from "swr";
import { API_ENDPOINT } from "../contstants";
import { fetcher } from "../utils/fetcher";

export const useCharacterData = () => {
  return useSWR(`${API_ENDPOINT}/characters`, fetcher);
};
