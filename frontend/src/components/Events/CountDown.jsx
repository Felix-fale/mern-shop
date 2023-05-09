import axios from "axios";
import { useEffect, useState } from "react";
// import { server } from "../../server";

function CountDown(props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // if (
    //   typeof timeLeft.days === "undefined" &&
    //   typeof timeLeft.hours === "undefined" &&
    //   typeof timeLeft.minutes === "undefined" &&
    //   typeof timeLeft.seconds === "undefined"
    // ) {
    //   axios.delete(`${server}/event/delete-shop-event/${data._id}`);
    // }
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    // const difference = +new Date(data.Finish_Date) - +new Date();
    const difference = +new Date("2023-05-18") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span className="text-[25px] text-[#475ad2]" key={index}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px]">Time's Up</span>
      )}
    </div>
  );
}

export default CountDown;
