import axios from "axios";

const API_KEY = "qgDWMHSBuJuIbWzSvNS7HLs87sJVCTDls08a59otbaw";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
});

export const requestPhotoesByQuery = async (
  query = "",
  page = 1,
  per_page = 20
) => {
  const { data } = await instance.get(
    `?query=${query}&page=${page}&per_page=${per_page}&client_id=${API_KEY}`
  );

  return data;
};
