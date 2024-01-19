import { useState, useEffect } from "react";

interface useFetchProps {
  startDate?: string;
  endDate: string;
}

export function useFetch({ startDate, endDate }: useFetchProps) {
  const [result, setResult] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_NASA_URL}?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setResult(data);
      })
      .catch((error) => setError(error.message));
  }, [startDate, endDate]);

  return [result, isLoading, error];
}
