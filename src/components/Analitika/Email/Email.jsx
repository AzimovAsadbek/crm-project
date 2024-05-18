import { email } from "../../../mock/email";
import SubTitle from "../../Generics/SubTitle";
import { Info, Wrapper, Section } from "./emailStyle";

const Email = () => {
  // Eemail
  return (
    <Wrapper>
      {email.map((eml) => {
        return (
          <Info key={eml.id}>
            <Section>
              <Info.Img src={eml.src} />
              <div>
                <SubTitle size={14}>{eml.name}</SubTitle>
                <SubTitle size={12} color={"#929FAF"}>
                  {eml.status}
                </SubTitle>
              </div>
            </Section>
            <Section>
              <SubTitle size={14}>
                {eml.sms} hkjdhkahdkjlhakljdhakjlsdhkjlashdjkahdkjhjkdhaskjdh
                akjhd
              </SubTitle>
            </Section>
            <Section end="true">
              <SubTitle size={14} color={"#929FAF"}>
                {eml.date}
              </SubTitle>
            </Section>
          </Info>
        );
      })}
    </Wrapper>
  );
};

export default Email;
