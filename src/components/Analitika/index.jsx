import React from "react";
import {
  FooterWrapper,
  Container,
  Wrapper,
  Card,
  Section,
  Plus,
  Counter,
  Arrow,
  SubCard,
} from "./style";
import Title from "../Generics/Title";
import SubTitle from "../Generics/SubTitle";
import privateData, { mediaData } from "../../utils/analitics";
import Email from "./Email/Email";
import Moliya from "./Moliya/Moliya";

const Analitika = () => {
  return (
    <Container>
      {/* Top */}
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
                  <Arrow />
                  <Counter>{v.count}</Counter>
                </Title>
                <Img />
              </Section>
            </Card>
          );
        })}
      </Wrapper>

      {/* Bottom  */}
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

      <FooterWrapper>
        <FooterWrapper.Email>
          <SubTitle mt={24} mb={16} count={12}>
            Email habarlar{" "}
          </SubTitle>
          <Email />
        </FooterWrapper.Email>

        <FooterWrapper.Moliya>
          <SubTitle mt={24} mb={16}>
            Moliya
          </SubTitle>
          <Moliya />
        </FooterWrapper.Moliya>
      </FooterWrapper>
    </Container>
  );
};

export default Analitika;
