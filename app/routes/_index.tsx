import type { MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useQuery, dehydrate, HydrationBoundary,QueryClient } from "@tanstack/react-query";
import { json } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const getMatchData = async () => {
  const response: any = await fetch(
    `https://aadhan-test-new-worker.aadhan-test-worker.workers.dev/icc_wc_2023_g24`
  );
  const matchData = await response.json();
  const data = await matchData;
  console.log("imt", matchData);
  return data;
};

export const loader = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['cricketscore'],
    queryFn: getMatchData,
  })
  return json({ dehydratedState: dehydrate(queryClient) })
  // const cricketData = await getMatchData();
  // return json(cricketData);
};

function MatchData() {
  const { data } = useQuery({ queryKey: ['cricketscore'], queryFn: getMatchData })
  console.log("loader data", data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Jai Vinayaka</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Index(){
  const { dehydratedState } = useLoaderData<typeof loader>();
  return (
    <HydrationBoundary state={dehydratedState}>
      <MatchData />
    </HydrationBoundary>
  )
}