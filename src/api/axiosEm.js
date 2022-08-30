import axios from "axios";
const URL = "http://localhost:4000/locations";
//
export const axiosEm = async (query) => {
  console.log("alo", { URL });
  const { data } = await axios.get(URL, {
    params: { q: query },
  });
  return data;
};
