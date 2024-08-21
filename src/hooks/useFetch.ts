import { useState } from "react";

export const useFetch = (func: () => Promise<any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any>();

  const request = async () => {
    try {
      setLoading(true);
      const response = await func();
      setData(response);
    } catch (error) {
      setError(error + "");
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, data, request };
};
