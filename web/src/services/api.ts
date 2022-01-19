import useSWR, { SWRResponse } from 'swr';
type ApiRoute = 'hello' | 'lionel';

export default function useApi(endpoint?: ApiRoute): SWRResponse {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint || ''}`;
  return useSWR(url, (args: string) =>
    fetch(args)
      .then(r => r.json())
      .then(j => j.data),
  );
}
