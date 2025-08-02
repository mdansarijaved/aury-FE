const baseUrl = "https://api.aury.kratuwus.co/api";
// const baseUrl = "http://localhost:3000/api";

export const globalFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`${baseUrl}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  return res.json();
};
