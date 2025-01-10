import React from "react";
import HeroSection from "../components/sections/HeroSection";

import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import { CardPublication, WrapperH } from "../components/elements/Card";

import data from "../data/publications.json";

function PublicationsPage() {
  return (
    <Layout>
      <HeroSection
        title="Publications"
        description="Check out my publications below. All articles are either peer-reviewed or currently under review."
      />
      <WrapperH>
        {data.publications.map((paper) => {
          return (
            <CardPublication
              title={paper.title}
              journal={paper.journal}
              image={paper.image}
              date={paper.date}
              link={paper.link}
            />
          );
        })}
      </WrapperH>
    </Layout>
  );
}

export const Head = () => <Seo title="Publications" />;

export default PublicationsPage;
