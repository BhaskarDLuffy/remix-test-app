import { matchShedule } from "~/staticdata/matchshedule";

const getBallByBallOverWise = (matchApiData: any, parameter: any) => {

  let ballByBallParameters: any = [];
  let ballByBallParametersOverWise: any = [];

  if (matchApiData.status !== "not_started") {
    parameter.over.balls.forEach((ball: any, index: any) => {
      let ballParameters = {
        id: index, color: "", "ball-type": ball["ball_type"], comment: "", ball: "", over: ball.overs[0], score: 0,
      };

      if (ball.ball_type === "normal") {
        if (ball.batsman["is_four"] === true) {
          setBallParameters("4", "four", "#2E93DB", 4);
        } else if (ball.batsman["is_six"] === true) {
          setBallParameters("6", "six", "#705BC3", 6);
        } else if (ball.batsman["is_dot_ball"] === true) {
          setBallParameters(".", "Dot ball", "brown", 0);
        } else if (ball.batsman.runs === 1) {
          setBallParameters("1", "1 run", "#43A548", 1);
        } else if (ball.batsman.runs === 2) {
          setBallParameters("2", "2 runs", "#43A548", 2);
        } else if (ball.bowler["wicket"] === true) {
          setBallParameters("Wkt", "Wicket", "red", 0);
        }
      } else {
        setBallParameters("W", "Wide", "#D95757", 1);
      }
      function setBallParameters(ball: any, comment: any, color: any, score: any) {
        ballParameters.ball = ball;
        ballParameters.comment = comment;
        ballParameters.color = color;
        ballParameters.score = score;
      }
      ballByBallParameters.push(ballParameters);
    });
    console.log("parameter bbb", ballByBallParameters);

    for (let i = 1; i <= 50; i++) {
      const ballParametersOverWise: any = {
        over: 0, balls: [], "total-score": 0,
      };
      ballByBallParameters.forEach((ball: any) => {
        if (i === ball.over) {
          ballParametersOverWise.balls.push(ball);
          ballParametersOverWise["total-score"] = ballByBallParameters.reduce(
            (totalScore: any, score: any) => totalScore + (score.score || 0),
            0
          );
        }
        ballParametersOverWise.over = i;
      });
      ballByBallParametersOverWise.push(ballParametersOverWise);
    }
    console.log("parameter bbbpow", ballByBallParametersOverWise);
    return ballByBallParametersOverWise
  }
}

const getPresentUnixtime = () => {
  return Math.floor(new Date().getTime() / 1000)
}

const getUnixIstConverter = () => {
  const unixtime = Math.floor(new Date().getTime() / 1000)
  const unixTimeMS = new Date(unixtime * 1000)
  const unixTimeMsIst = unixTimeMS.setMinutes(unixTimeMS.getMinutes() + 330)
  const unixTimeIst = Math.floor(unixTimeMsIst / 1000)
  return unixTimeIst
}

const getMatchTimePeriod = () => {
  const presentUnixIstime = getPresentUnixtime()
  const presentMatchParameters = getPresentMatchParameters()
  return presentMatchParameters.some((match) => {
    return (presentUnixIstime >= match["start-time"] && presentUnixIstime <= match["end-time"])
  })
}

const getMatchIntervalPeriod = () => {
  const presentUnixIstime = getPresentUnixtime()
  const presentMatchParameters = getPresentMatchParameters()
  return presentMatchParameters[0].match.some((interval) => {
    return (presentUnixIstime >= interval["start-time"] && presentUnixIstime <= interval["end-time"])
  })
}

const getDateFromUnix = (unixTime: any) => {
  const Dateformat = new Date(unixTime * 1000)
  return `${Dateformat.getDate()}/${String(Dateformat.getMonth() + 1).padStart(2, '0')}/${Dateformat.getFullYear()}`
}

const getPresentMatchParameters = () => {
  const presentUnixime = getPresentUnixtime()
  const presentDate = getDateFromUnix(presentUnixime)
  const PresentMatchParameters = matchShedule.filter((match) => getDateFromUnix(match["start-time"]) === presentDate)
  return PresentMatchParameters
}

// const getFavourateTeam = (oddsApiData:any, matchApiData:any) =>{
//   if(matchApiData.status === "started"){
//   let teamAPercentage = oddsApiData.match["result_prediction"].automatic.percentage[0].value 
//   let teamBPercentage = oddsApiData.match["result_prediction"].automatic.percentage[1].value 
//   let teamAName = oddsApiData.match["result_prediction"].automatic.percentage[0]["team_key"]
//   let teamBName = oddsApiData.match["result_prediction"].automatic.percentage[1]["team_key"]
//   if(teamAPercentage > teamBPercentage){
//     return teamAName
//   }else{
//     return teamBName
//   }
// }
// }
// const getBetOdds = (oddsApiData:any, matchApiData:any)=>{
//   let favourateTeam = getFavourateTeam(oddsApiData, matchApiData)
//   let betOdds = {
//     high:"",
//     low:""
//   }
//   if(matchApiData.status === "started"){
//   oddsApiData.match["bet_odds"].automatic.fractional.forEach((odds:any)=>{
//     if(favourateTeam === odds["team_key"]){
//       betOdds.high = odds.numerator
//     }
//     else{
//       betOdds.low = odds.numerator
//     }
//   })
// }
//   return betOdds
// }

export {
  getBallByBallOverWise,
  getPresentUnixtime,
  getUnixIstConverter,
  getMatchTimePeriod,
  getMatchIntervalPeriod,
  getPresentMatchParameters,
  getDateFromUnix,
  // getFavourateTeam,
  // getBetOdds
}