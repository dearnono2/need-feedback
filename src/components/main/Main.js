import Content from "./Content";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <Content></Content>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  min-width: 1200px;
`;

export default Main;
