import React from "react";
import {
  Arrow,
  Card,
  Container,
  Counter,
  Plus,
  Section,
  SubCard,
  Wrapper,
} from "./style";
import Title from "../Generics/Title";
import SubTitle from "../Generics/SubTitle";
import privateData, { mediaData } from "../../utils/analitics";

const Analitika = () => {
  return (
    <Container>
      <Title mb={16}>Analitika</Title>
      <Wrapper gap={24}>
        {privateData?.map((v) => {
          const { icon: Icon } = v;
          const { img: Img } = v;
          return (
            <Card key={v.id} title={v.title} gap={24}>
              {/* top */}
              <Section title={v.title}>
                <Title>
                  <Icon className="icon" /> {v.title}
                </Title>
                <Plus title={v.title} />
              </Section>
              {/* bottom */}
              <Section title={v.title}>
                <Title>
                  <Arrow /> <Counter>{v.count}</Counter>
                </Title>
                <Img />
              </Section>
            </Card>
          );
        })}
      </Wrapper>
      <SubTitle mt={24} mb={16}>
        Ijtimoiy tarmoqlar
      </SubTitle>
      <Wrapper gap={24}>
        {mediaData?.map((v) => {
          const { icon: Icon } = v;
          return (
            <SubCard key={v.id} gap={24}>
              {/* top */}
              <Section title={v.title}>
                <SubTitle>
                  <Icon className="subIcon" /> {v.title}
                </SubTitle>
              </Section>
              {/* bottom */}
              <Section title={v.title}>
                <SubTitle color={"green"}>
                  <Arrow /> 22%
                </SubTitle>
                <Counter>{v.count}k</Counter>
              </Section>
            </SubCard>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Analitika;
