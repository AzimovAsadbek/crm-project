import { Container, Icon } from "./style";
import Title from "../Title";
import { useLocation } from "react-router-dom";

const BroadCrumb = () => {
  const location = useLocation();
  //
  return (
    location.state?.parent !== "Analitika" && (
      <Container title={location.state?.parent}>
        <Title>{location.state?.parent}</Title>
        {location.state?.child && <Icon />}
        <Title type="true">{location.state?.child}</Title>
      </Container>
    )
  );
};

export default BroadCrumb;
