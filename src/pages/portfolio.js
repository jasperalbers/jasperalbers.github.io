import React from "react";
import HeroSection from "../components/sections/HeroSection";

import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import { CardPortfolio, WrapperL } from "../components/elements/Card";

import data from "../data/portfolio.json";

function PortfolioPage() {
  return (
    <Layout>
      <HeroSection
        title="Portfolio"
        description="This is a collection of apps, tools and general software that I have
          build or contributed to."
      />
      <WrapperL>
        {data.portfolio.map((item) => {
          return (
            <CardPortfolio
              title={item.title}
              image={item.image}
              link={item.link}
              text={item.text}
            />
          );
        })}
      </WrapperL>
    </Layout>
  );
}

export const Head = () => <Seo title="Portfolio" />;

export default PortfolioPage;
