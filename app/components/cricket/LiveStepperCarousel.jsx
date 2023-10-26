const LiveStepperCarousel = ({ ballByBallParametersOverWise }) => {

  return (
    <>
      {ballByBallParametersOverWise
      .filter((over)=>over["total-score"] !== 0)
      .map((over, index)=>(
        <div className={`flex font-semibold gap-3 items-center px-4 ${index === 49 ? "border-e-2 border-e-[#D6D6D6]":""}`} key={over.over}>
        <div className='text-black flex gap-3 items-center text-[1.08rem]'>
          <p>over</p>
          <p>{over.over}</p>
        </div>
        <div className='flex gap-1'>
          {over.balls
          .map((ball) => (
            <div className={`w-7 h-7 rounded-full text-center text-white grid place-content-center`} style={{background:`${ball.color}`}} key={ball.id}>
              {ball.ball}
            </div>
          ))}
        </div>
        <div className='flex gap-2 text-[1.08rem]'>
        <p>=</p>
        <p>{over["total-score"]}</p>
        </div>
      </div>
      ))}
    </>
  )
}

export default LiveStepperCarousel
