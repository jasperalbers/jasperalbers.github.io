import styled from "styled-components";
import { themes } from "./ColorStyles";

export const H1 = styled.h1`
  margin: 0;
  color: black;
  font-size: 50px;
  line-height: 1.2;

  @media (max-width: 500px) {
    font-size: 42px;
  }
    @media (max-width: 400px) {
    font-size: 35px;
  }
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

export const H2 = styled.h2`
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 32px;
  line-height: 1.2;

  @media (max-width: 500px) {
    font-size: 28px;
  }
    @media (max-width: 400px) {
    font-size: 24px;
  }
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text2};
  }
`;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

export const H4 = styled.h4`
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 17px;
  }
    @media (max-width: 400px) {
    font-size: 14px;
  }
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;

export const BodyMain = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 20px;
  line-height: 1.5;

  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;

  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

export const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;

export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`;

export const Link = styled.a`
  padding: 5px 5px;
  /*  background: rgba(255, 255, 255, 0.0);*/
  border: none;
  font-weight: 650;
  border-radius: 40px;
  outline: none;
  transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  /*  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);*/
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;
