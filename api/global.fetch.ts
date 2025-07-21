const baseUrl = "https://aury.kratuwus.co/api";

export const globalFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`${baseUrl}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  return res.json();
};
