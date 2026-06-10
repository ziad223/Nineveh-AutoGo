import axios from "axios";

const getApiUrl = (url: string) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  const endpoint = url.replace(/^\//, "");

  if (!baseURL) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }

  return `${baseURL}/${endpoint}`;
};

const apiServiceCall = async ({
  url,
  method,
  body,
  headers,
}: {
  url: string;
  method?: string;
  body?: any;
  headers?: any;
}) => {
  try {
    const response = await axios({
      method: method?.toUpperCase() || "GET",
      url: getApiUrl(url),
      data: body,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    return response?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API request failed", {
        url: getApiUrl(url),
        status: error.response?.status,
        data: error.response?.data,
      });
      throw { data: error.response?.data, status: error.response?.status };
    }

    throw new Error("An unexpected error occurred");
  }
};

export default apiServiceCall;
