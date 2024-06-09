import React from "react";
import styled from "styled-components";

export default function WaveBackground() {
  return (
    <Wrapper>
      <Wave src="/images/backgrounds/waves.svg" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  height: 340px;
  background-size: cover;
  background-position: center;
  position: relative;

  @media (prefers-color-scheme: dark) {
    content: url("/images/backgrounds/waves-dark.svg");
  }
`;
