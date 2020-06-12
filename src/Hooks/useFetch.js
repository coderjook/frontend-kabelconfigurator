import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (urldata, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [url, setUrl] = useState(urldata);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return data;
};
