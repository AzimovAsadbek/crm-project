import React, { useEffect, useState } from "react";
import { Section, Timer } from "./style";

const Time = () => {
  const [date, setDate] = useState({ hour: "", minute: "", status: "" });
  const GetSeconds = () => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour > 12) {
      hour -= 12;
      setDate((d) => {
        return { ...d, status: "PM" };
      });
    } else
      setDate((d) => {
        return { ...d, status: "AM" };
      });

    if (hour < 10) hour = "0" + hour;

    if (minute < 10) minute = "0" + minute;
    setDate((d) => {
      return { ...d, hour, minute };
    });
    return () => clearInterval(timer);
  };
  const timer = setInterval(() => {
    GetSeconds();
  }, 1000);

  useEffect(() => {
    GetSeconds();
  }, []);

  return (
    <Section>
      <Timer>
        {date.hour}:{date.minute}
      </Timer>
      <Timer status="true">PM</Timer>
    </Section>
  );
};

export default Time;

// import React, { useEffect, useState } from "react";
// import { Section, Timer } from "./style";

// const Time = () => {
//   const [date, setDate] = useState({ hour: "", minute: "", status: "" });

//   const formatTime = (time) => {
//     if (time < 10) return "0" + time;
//     return time;
//   };

//   const GetSeconds = () => {
//     const currentDate = new Date();
//     let hour = currentDate.getHours();
//     let minute = currentDate.getMinutes();

//     if (hour > 12) {
//       hour -= 12;
//       setDate({
//         hour: formatTime(hour),
//         minute: formatTime(minute),
//         status: "PM",
//       });
//     } else {
//       setDate({
//         hour: formatTime(hour),
//         minute: formatTime(minute),
//         status: "AM",
//       });
//     }

//     setTimeout(GetSeconds, 1000); // To'xtatish qo'shilgan
//   };

//   useEffect(() => {
//     GetSeconds(); // setInterval o'rniga GetSeconds ishlatilgan
//     return () => clearInterval(); // Intervalni to'xtatish qo'shilgan
//   }, []);

//   return (
//     <Section>
//       <Timer>
//         {date.hour}:{date.minute}
//       </Timer>
//       <Timer status={date.status}>{date.status}</Timer>
//     </Section>
//   );
// };

// export default Time;
