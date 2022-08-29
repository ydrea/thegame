import axios from "axios";
// const URLi = "https://localhost:4433/db.json";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "53af3d2fdf27c517f767ade373c0734c";
//
export const axiosEm = async (query) => {
  console.log("alo", { URL });
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
