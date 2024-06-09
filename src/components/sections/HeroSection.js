import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, H2, BodyMain } from "../styles/TextStyles";
import WaveBackground from "../backgrounds/WaveBackground"

export default function HeroSection(props) {
  return (
    <Wrapper>
      <WaveBackground />
      <TextWrapper>
        <H1>{props.title}</H1>
        <H2>{props.subtitle}</H2>
        <BodyMain>{props.description}</BodyMain>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 150px 50px;
  text-align: center;

  @media (max-width: 540px) {
    padding: 100px, 20px;
  }
`;

const animation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;

const TextWrapper = styled.div`
  a:hover {
    transform: translateY(-4px);
  }
  > * {
    opacity: 0;
    animation: ${animation} 3s 0.1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }
`;


export const SocialMedia = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  justify-items: center;

  @media (max-width: 550px) {
    grid-gap: 10px;
  }
`;

