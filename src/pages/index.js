import React from "react";
import { Link } from "gatsby";
import HeroSection, { SocialMedia } from "../components/sections/HeroSection";

import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import bio from "../data/bio.json";

function IndexPage() {
  return (
    <Layout>
      <HeroSection
        title="👋🏼 Hi, I'm Jasper."
        subtitle="Nice to meet you!"
        description={bio.bio}
      />

      <br></br>

      <SocialMedia>
        <Link to="mailto:jasperalbers@posteo.de">
          {" "}
          <img src="/images/icons/mail.png" alt="mail" width="40" />{" "}
        </Link>
        <Link to="https://github.com/jasperalbers">
          {" "}
          <img src="/images/icons/github.svg" alt="github" width="40" />{" "}
        </Link>
        <Link to="https://www.linkedin.com/in/jasper-albers/">
          {" "}
          <img src="/images/icons/linkedin.png" alt="linkedin" width="40" />{" "}
        </Link>
        <Link to="https://scholar.google.com/citations?user=RZqyxSQAAAAJ&hl=en">
          {" "}
          <img src="/images/icons/scholar.svg" alt="scholar" width="40" />{" "}
        </Link>
        <Link to="https://toot.io/@jasperalbers">
          {" "}
          <img src="/images/icons/mastodon.svg" alt="mastodon" width="40" />{" "}
        </Link>
      </SocialMedia>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;

export default IndexPage;
