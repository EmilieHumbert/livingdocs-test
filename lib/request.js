import axios from "axios";

export default async function getLatestPublication(url) {
  const token = process.env.LIVINGDOCS_KEY;

  return axios.get(url, {
    baseURL: "https://server.livingdocs.io/api/v1/",
    headers: { Authorization: `Bearer ${token}` },
    timeout: 20000,
  });
}
