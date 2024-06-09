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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 340px;
  z-index: 1;
`;

const Wave = styled.img`
  @media (prefers-color-scheme: dark) {
    content: url("/images/backgrounds/waves-dark.svg");
  }
`;
