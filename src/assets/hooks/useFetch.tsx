import { useQuery } from "@tanstack/react-query";

export const useFetch = <T,>(url: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Error: ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        return data as T;
      } catch (error: any) {
        throw new Error(`Error: ${error.message}`);
      }
    },
    staleTime: 600000,
    cacheTime: 300000,
    retry: 1,
  });

  return { data, isLoading, error };
};
