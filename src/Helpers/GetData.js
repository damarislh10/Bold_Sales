import { url } from "./url";

export const getData = async () => {
  const resp = await fetch(url);
  const result = await resp.json();
  return result;
};

