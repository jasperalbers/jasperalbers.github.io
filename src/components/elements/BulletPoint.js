import React from "react";
import styled from "styled-components";

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
        <li>
          <heading>{props.title}</heading>
          <br></br>
          <Time>{props.time}</Time>
          <p>
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
          </p>
          <p>
            <i>{props.place}</i>
          </p>
        </li>
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

const Heading = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 650;

  @media (max-width: 550px) {
    color: black;
    font-size: 17px;
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
p .bold-text {
    font-weight: bold;
`;
