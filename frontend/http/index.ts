import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:1337",
  headers: {
    Authorization: `Bearer ${
      process.env.BACKEND_API_KEY ||
      "1de574a2372cacf3a2d910531a33e8434c9d0487dc2f275e061b72e0ab16ffc97a8aec7220bbe3dadbabea5378f818a4f96487a15d88f7d867dcd70e1b59ee11b47c29707f0fee738be4d26cd73ccc54dc73a35a39d9192c84318ae5ea66d3c5ef73d2badca3e1d055f9453ab0e99bb377eae201ad5ca3ede3302a4fc246b3db"
    }`,
  },
});

export const fetchCategories = async () => api.get("/api/categories");

export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

export const fetchArticleBySlug = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);
