import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BulletPoint from "../components/BulletPoint"

import data from '../../data.json'

const ResumePage = () => (
    <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Résumé</h1>
        <p>My life until now!</p>
      </div>
    </div>

    <div className="timeline">
        <div className="timeline-list">
            <h1>🎓 Education</h1>
            {data.resume.education.map((item) => {
                return (
                    <BulletPoint
                        title={item.title}
                        time={item.time}
                        place={item.place}
                        text={item.text}
                        grade={item.grade}
                        supervisor={item.supervisor}
                        track={item.track}
                    />
                );
            })}
        </div>

        <div className="timeline-list">
            <h1>🏆 Awards and Scholarships</h1>
            {data.resume.awards.map((item) => {
                return (
                    <BulletPoint
                        title={item.title}
                        time={item.time}
                        text={item.text}
                    />
                );
            })}
        </div>

        <div className="timeline-list">
            <h1>🔨 Work Experience</h1>
            {data.resume.experience.map((item) => {
                return (
                    <BulletPoint
                        title={item.title}
                        time={item.time}
                        place={item.place}
                    />
                );
            })}
        </div>

        <div className="timeline-list">
            <h1>✨ Skills</h1>
            {data.resume.skills.map((item) => {
                return (
                    <BulletPoint
                        title={item.title}
                        text={item.text}
                    />
                );
            })}
        </div>

        <div className="timeline-list">
            <h1>👥 Voluntary Engagement</h1>
            {data.resume.voluntary.map((item) => {
                return (
                    <BulletPoint
                        title={item.title}
                        text={item.text}
                        time={item.time}
                    />
                );
            })}
        </div>
    </div>

  </Layout>
)

export const Head = () => <Seo title="Publications" />

export default ResumePage