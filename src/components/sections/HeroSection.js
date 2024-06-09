import React from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import { H1, H2, BodyMain } from "../styles/TextStyles";
import WaveBackground from "../backgrounds/WaveBackground";

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
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
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

export const TextWrapper = styled.div`
  margin: auto;
  position: relative;
  z-index: 2;
  padding: 100px 50px;
  max-width: 600px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);

  > * {
    opacity: 0;
    animation: ${animation} 3s 0.1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }

  @media (max-width: 500px) {
    padding: 135px 50px;
  }
`;

export const SocialMedia = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  justify-items: center;
  max-height: 60px;
  padding: 20px;

  a {
    transition: transform 0.2s ease-in-out;
  }

  a:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 550px) {
    grid-gap: 10px;
  }
`;

export function SocialMediaItem(props) {
  return (
    <Link to={props.link}>
      {" "}
      <SocialMediaIcon
        src={props.image}
        alt={props.alt}
        width="40"
        imageDark={props.imageDark}
      />{" "}
    </Link>
  );
}

const SocialMediaIcon = styled.img`
  @media (prefers-color-scheme: dark) {
    content: url(${(props) => props.imageDark});
  }
`;
