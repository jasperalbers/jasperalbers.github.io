import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"
import CardPublication from "../components/CardPublication"

import data from '../../data.json'

const PublicationsPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Publications</h1>
        <p>Check out my publications below. All articles are freely available and either peer-reviewed or under review.</p>
      </div>
    </div>
    <div className="Cards">
        <div className="CardGroupH">
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
        </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Publications" />

export default PublicationsPage
