import SubTitle from "../../Generics/SubTitle";
import { Wrapper, Section, ArrowIcon } from "./moliyalStyle";

const Moliya = () => {
  return (
    <Wrapper>
      <Section>
        <ArrowIcon left="true" />
        <SubTitle fw={600} size={14}>
          May 2024
        </SubTitle>
        <ArrowIcon />
      </Section>
    </Wrapper>
  );
};

export default Moliya;
