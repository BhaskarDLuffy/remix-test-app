import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useQuery, dehydrate, HydrationBoundary,QueryClient } from "@tanstack/react-query";
import { json } from "@remix-run/cloudflare";
import {
  MatchSelector,
  BattingScore,
  BowlingScore,
  BattingSkeleton,
  BowlingSkeleton,
  LiveStepperCarousel,
} from "../components/cricket";
// import {
//   getBallByBallOverWise,
//   getMatchTimePeriod,
//   getMatchIntervalPeriod,
//   getPresentMatchParameters,
//   // getFavourateTeam,
//   // getBetOdds,
// } from "~/services/cricket/MatchServices";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

let presentMatchParameters: any = getPresentMatchParameters();
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
  const { data } = useQuery({ queryKey: ['cricketscore'], queryFn: getMatchData })
  console.log("loader data", data);

  // const [interval, setInterval] = useState(10000);

  // let MatchTimePeriod = getMatchTimePeriod();
  // let matchIntervalPeriod = getMatchIntervalPeriod();
  // console.log(
  //   "mt check",
  //   !!MatchTimePeriod,
  //   "mt interval",
  //   !!matchIntervalPeriod
  // );
  // useEffect(() => {
  //   if (matchIntervalPeriod) {
  //     setInterval(10000);
  //   } else {
  //     setInterval(0);
  //   }
  // }, [matchIntervalPeriod]);
  // console.log("interval", interval);

  const matchApiData = data["match-data"].data;
  // const ballByBallApiData = data["ballbyball-data"].data;
  
  //BallbyBall Parameters
  // let ballByBallParametersOverWise = getBallByBallOverWise(
  //   matchApiData,
  //   ballByBallApiData
  // );

  return (
    <div className="cricket-container w-full h-[100svh] flex items-center justify-center relative">
      <div
        className="cricket-sub-container w-full h-full flex flex-col items-center justify-center overflow-scroll xms:overflow-hidden"
        style={{
          background: `linear-gradient(91deg, #30005A 1.14%, #4B0A8C 98.94%)`,
        }}
      ></div>
      <div className="score-container px-2 text-[14px] font_poppins w-full h-[100svh] sm:max-w-[700px] font__nunitosans  flex-col items-center justify-center fixed top-0 pt-[40px] pb-6">
        <div className="cricket-brand-container flex justify-end items-center mb-[5px] ps-4">
          <div>
            <MatchSelector matchvalue={presentMatchParameters[0].match[0]["match-id"]} />
          </div>
        </div>
        <div className="score-commentry-container w-full h-[150px] bg-[#0F004B] border-[5px] border-black">
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full flex-1 border-2"></div>
            <div className="w-full border-2 bg-white font-semibold flex justify-between items-center px-2">
              <div
                className={`country1-score ${
                  matchApiData.play !== null &&
                  matchApiData.play.innings_order[0] === "a_1"
                    ? "order-1"
                    : "order-2"
                }`}
              >
                {matchApiData.status === "not_started" ? (
                  <>{matchApiData.teams.a.code} - </>
                ) : (
                  <>
                    {matchApiData.teams.a.code} -{" "}
                    {matchApiData.play.innings["a_1"].score.runs}/
                    {matchApiData.play.innings["a_1"].wickets}(
                    {matchApiData.play.innings["a_1"].overs[0]}.
                    {matchApiData.play.innings["a_1"].overs[1]})
                  </>
                )}
              </div>
              <div
                className={`country2-score ${
                  matchApiData.play !== null &&
                  matchApiData.play.innings_order[0] === "a_1"
                    ? "order-2"
                    : "order-1"
                }`}
              >
                {matchApiData.status === "not_started" ? (
                  <>{matchApiData.teams.b.code} - </>
                ) : (
                  <>
                    {matchApiData.teams.b.code} -{" "}
                    {matchApiData.play.innings["b_1"].score.runs}/
                    {matchApiData.play.innings["b_1"].wickets}(
                    {matchApiData.play.innings["b_1"].overs[0]}.
                    {matchApiData.play.innings["b_1"].overs[1]})
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="live-container w-full relative">
          {matchApiData.status === "completed" ? (
            <div className="absolute h-full w-full z-10 bg__blur text-[21px] grid place-content-center font-semibold">
              <>
                {matchApiData.teams[`${matchApiData.winner}`].name} won by{" "}
                {
                  matchApiData.play.innings[`${matchApiData.winner}_1`].score
                    .runs
                }{" "}
                runs
              </>
            </div>
          ) : (
            <></>
          )}
          <div className="rate-container bg-white py-2 px-4 w-full flex items-center justify-between rounded-md my-2">
            <p className="w-full">
              Run Rate:{" "}
              {matchApiData.status === "not_started" ||
              matchApiData.status === "completed" ? (
                <>-</>
              ) : (
                <>
                  {
                    matchApiData.play.innings[
                      `${matchApiData.play.innings_order[0]}`
                    ].score.run_rate
                  }
                </>
              )}
            </p>
            <p className="w-full text-end">
              Balls Rem:{" "}
              {matchApiData.status === "not_started" ||
              matchApiData.status === "completed" ? (
                <>-</>
              ) : (
                <>
                  {300 -
                    matchApiData.play.innings[
                      `${matchApiData.play.innings_order[0]}`
                    ].score.balls}
                </>
              )}
            </p>
          </div>
          <div className="batting-score-container">
            {matchApiData.status === "completed" ||
            matchApiData.status === "not_started" ? (
              <>
                <BattingSkeleton />
              </>
            ) : (
              <div className="w-full z-0">
                <BattingScore matchApiData={matchApiData} />
              </div>
            )}
          </div>
          <div className="bowling-score-container">
            {matchApiData.status === "completed" ||
            matchApiData.status === "not_started" ? (
              <>
                <BowlingSkeleton />
              </>
            ) : (
              <>
                <BowlingScore matchApiData={matchApiData} />
              </>
            )}
          </div>
        </div>

        {matchApiData.status !== "not_started" && (
          <div className="rate-container bg-white py-2 px-4 w-full flex rounded-md my-1 overflow-x-auto">
            <>
              <LiveStepperCarousel
                ballByBallParametersOverWise={ballByBallParametersOverWise}
              />
            </>
          </div>
        )}
      </div>
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