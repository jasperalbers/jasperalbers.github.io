import React from "react";
import styled from "styled-components";
import HeroSection, {
  SocialMedia,
  TextWrapper,
  SocialMediaItem,
} from "../components/sections/HeroSection";
import { BodyMain } from "../components/styles/TextStyles";

import socialmedia from "../data/socialmedia";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import bio from "../data/bio.json";

function IndexPage() {
  return (
    <Layout>
      <HeroSection title="👋🏼 Hi, I'm Jasper." subtitle="Nice to meet you!" />
      <ContentWrapper>
        <BodyMain>{bio.bio}</BodyMain>
        <SocialMedia>
          {socialmedia.socialmedia.map((item) => {
            return (
              <SocialMediaItem
                alt={item.alt}
                image={item.image}
                imageDark={item.imageDark}
                link={item.link}
              />
            );
          })}
        </SocialMedia>
      </ContentWrapper>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;

export default IndexPage;

const ContentWrapper = styled(TextWrapper)`
  padding: 0 50px;
`;
