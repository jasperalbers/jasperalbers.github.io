import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardPortfolio from "../components/CardPortfolio"

import data from '../../data.json'

const PortfolioPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Portfolio</h1>
        <p>This is a collection of apps, tools and general software that I have build or contributed to.</p>
      </div>
    </div>
    <div className="Cards">
        <div className="CardGroupL">
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
        </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage
