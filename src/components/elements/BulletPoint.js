import React from "react";
import styled from "styled-components";
import { MediumText, H4 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles"

export default function BulletPoint(props) {
  const formatText = (text) => {
    const parts = text.split(":");
    if (parts.length > 1) {
      return (
        <>
          <span className="bold-text">{parts[0]}</span>:{" "}
          {parts.slice(1).join(":")}{" "}
        </>
      );
    }
    return text;
  };

  return (
    <Wrapper>
      <ul>
        <Li>
          <H4>{props.title}</H4>
          <Time>{props.time}</Time>
          <MediumText>
            {props.grade && (
              <>
                {formatText(props.grade)}
                <br />
              </>
            )}
            {props.track && (
              <>
                {formatText(props.track)}
                <br />
              </>
            )}
            {props.text && (
              <>
                {formatText(props.text)}
                <br />
              </>
            )}
            {props.supervisor && (
              <>
                {formatText(props.supervisor)}
                <br />
              </>
            )}
          </MediumText>
          <MediumText>
            <i>{props.place}</i>
          </MediumText>
        </Li>
      </ul>
      <br></br>
    </Wrapper>
  );
}

const Time = styled.div`
  color: #61ad71;
  font-size: 15px;
  font-weight: 380;
`;

const Wrapper = styled.div`
p .bold-text {
    font-weight: bold;
  }
`;

const Li = styled.li`
  color: black;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;
