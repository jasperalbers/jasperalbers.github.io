import React from "react";
import styled from "styled-components";
import { H3, H4, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import { MoveUp } from "../animations/MoveUp";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

function CardPortfolio(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <CardL>
        <H3>{props.title}</H3>
        <CardImage src={`/images/portfolio/${props.image}`} alt={props.title} />
        <MediumText>{props.text}</MediumText>
        <Tag><FontAwesomeIcon icon={faTag} color="white"/> {props.tag}</Tag>
      </CardL>
    </a>
  );
}

function CardPublication(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <CardH>
        <H4>{props.title}</H4>
        <CardImage
          src={`/images/publications/${props.image}`}
          alt={props.title}
        />
        <MediumText>
          <i>{props.journal}</i> – {props.date}
        </MediumText>
      </CardH>
    </a>
  );
}

export { CardPortfolio, CardPublication };

const Tag = styled.div`
  width: auto;
  height: auto;
  border-radius: 12px;
  background: teal;
  position: absolute;
  right: 20px; /* Adjust padding as needed */
  bottom: 20px; /* Adjust position as needed */
  padding: 3px 10px;
`;

const Wrapper = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  > * {
    opacity: 0;
    animation: ${MoveUp} 3s 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }
`;

export const WrapperL = styled(Wrapper)`
  @media (max-width: 1700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WrapperH = styled(Wrapper)`
  @media (max-width: 1700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  width: 300px;
  height: 225px;
  background: ${themes.light.card.backgroundColor};
  border-radius: 20px;
  box-shadow: ${themes.light.card.boxShadow};
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  @media (prefers-color-scheme: dark) {
    background: ${themes.dark.card.backgroundColor};
    box-shadow: ${themes.dark.card.boxShadow};
  }
`;

const CardL = styled(Card)`
  width: 500px;
  height: 400px;
  grid-template-rows: 10% 75% 10%;
  gap: 10px;

  @media (max-width: 600px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 200px;
  }
`;

const CardH = styled(Card)`
  width: 500px;
  height: 400px;
  grid-template-rows: 10% 70% 10%;
  gap: 20px;

  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
    gap: 20px;
    grid-template-rows: 20% 60% 10%;
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 200px;
    gap: 20px;
    grid-template-rows: 20% 50% 10%;
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
`;
