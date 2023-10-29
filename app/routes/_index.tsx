import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useQuery, dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { json } from "@remix-run/cloudflare";
import { getPresentMatchParameters, getMatchIntervalPeriod } from "~/services/cricket/MatchServices";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

let presentMatchParameters = getPresentMatchParameters()
export const getMatchData = async () => {
  const response: any = await fetch(
    `https://aadhan-test-new-worker.aadhan-test-worker.workers.dev/${presentMatchParameters[0].match[0].key}`
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
};

function MatchData() {
  const [ interval, setInterval ] = useState(10000)
  let matchIntervalPeriod = getMatchIntervalPeriod()
  useEffect(()=>{
    if(!matchIntervalPeriod!){
      setInterval(10000)
    }else{
      setInterval(0)
    }
  }, [])

  const { data } = useQuery({ queryKey: ['cricketscore'], queryFn: getMatchData, refetchInterval:interval })
  console.log("loader data", data);
  
  let matchApiData = {};
  let ballByBallApiData = {};
  try{
    matchApiData = data["match-data"]?.data;
    ballByBallApiData = data["ballbyball-data"].data;
  }catch(error){
    console.log(error);
  }

  return (
    <>
      <h1 className="text-center text-orange-500 text-[3rem]">Jai Vinayaka</h1>
      <p>{JSON.stringify(matchApiData)}</p>
      <hr />
    </>
  );
}

export default function Index() {
  const { dehydratedState } = useLoaderData<typeof loader>();
  return (
    <HydrationBoundary state={dehydratedState}>
      <MatchData />
    </HydrationBoundary>
  )
}