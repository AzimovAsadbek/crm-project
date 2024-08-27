import { useState } from "react";
import useDate, { weeks } from "../../../hooks/date";
import SubTitle from "../../Generics/SubTitle";
import { Wrapper, Section, ArrowIcon, CardWrappper } from "./moliyalStyle";

const Moliya = () => {
  const date = useDate();

  const [active, setActive] = useState(new Date().getDate());
  const [weekCount, setWeekCount] = useState(0);

  const clickDate = (v) => {
    if (v.getDate() == date.week(weekCount)[0].getDate())
      setWeekCount(weekCount + 1);
    else if (v.getDate() == date.week(weekCount)[6].getDate())
      setWeekCount(weekCount - 1);
    setActive(v.getDate());
  };

  const onClickForward = () => setWeekCount(weekCount - 6);
  const onClickBackward = () => setWeekCount(weekCount + 6);
  return (
    <Wrapper>
      <Section>
        <ArrowIcon left="true" onClick={onClickBackward} />
        <SubTitle fw={600} size={14}>
          {date.month.full} {date.year}
        </SubTitle>
        <ArrowIcon onClick={onClickForward} />
      </Section>
      <Section mt={16} mb={16}>
        {date.week(weekCount).map((v, i) => {
          const ac = `${active === v.getDate()}`;
          return (
            <CardWrappper key={i} active={ac} onClick={() => clickDate(v)}>
              <SubTitle
                size={14}
                color={ac === "true" ? "white" : "var(--secondaryColor)"}
              >
                {weeks[v.getDay()].short}
              </SubTitle>
              <SubTitle
                size={14}
                color={ac === "true" ? "white" : "var(--primaryColor)"}
              >
                {v.getDate()}
              </SubTitle>
            </CardWrappper>
          );
        })}
      </Section>
      <SubTitle color={"#929FAF"} size={14}>
        {date.date} - {date.month.full}, {date.year}
      </SubTitle>
      <SubTitle size={32} mt={8}>
        8 520 000{" "}
        <SubTitle size={24} color={"#52C41A"} ml={16}>
          +22%
        </SubTitle>
      </SubTitle>
      <Section mt={24} mb={8}>
        <SubTitle size={14} color={"#253E5F"}>
          Talabalar
        </SubTitle>
        <SubTitle size={14} color={"#253E5F"}>
          5 760 000
        </SubTitle>
      </Section>

      <Section>
        <SubTitle size={14} color={"#253E5F"}>
          Talabalar
        </SubTitle>
        <SubTitle size={14} color={"#253E5F"}>
          5 760 000
        </SubTitle>
      </Section>
    </Wrapper>
  );
};

export default Moliya;
