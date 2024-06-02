import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import mail from '../images/mail.png'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.png'
import scholar from '../images/scholar.svg'
import mastodon from '../images/mastodon.svg'

import data from '../../data.json'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>👋🏼 Hi, I'm Jasper.</h1>
        <h2>Nice to meet you!</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>{data.bio}</p>

        <br></br>

        <div className="SocialMedia">
          <Link to="mailto:jasperalbers@posteo.de"> <img src={mail} width="40" /> </Link>
          <Link to="https://github.com/jasperalbers"> <img src={github} width="40" /> </Link>
          <Link to="https://www.linkedin.com/in/jasper-albers/"> <img src={linkedin} width="40" /> </Link>
          <Link to="https://scholar.google.com/citations?user=RZqyxSQAAAAJ&hl=en"> <img src={scholar} width="40" /> </Link>
          <Link to="https://toot.io/@jasperalbers"> <img src={mastodon} width="40" /> </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
