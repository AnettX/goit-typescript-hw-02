import axios, { AxiosResponse } from "axios";

const API_KEY = "qgDWMHSBuJuIbWzSvNS7HLs87sJVCTDls08a59otbaw";

export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface SearchResponse {
  total_pages: number;
  results: Photo[];
}

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
});

export const requestPhotoesByQuery = async (
  query: string = "",
  page: number = 1,
  per_page: number = 20
): Promise<SearchResponse> => {
  const { data }: AxiosResponse<SearchResponse> = await instance.get(
    `?query=${query}&page=${page}&per_page=${per_page}&client_id=${API_KEY}`
  );

  return data;
};
