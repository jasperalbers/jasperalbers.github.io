import React from "react";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";

import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import BulletPoint from "../components/elements/BulletPoint";
import { H2 } from "../components/styles/TextStyles";

import data from "../data/resume.json";

function ResumePage() {
  return (
    <Layout>
      <HeroSection title="Résumé" description="My life until now!" />
      <Resume>
        <ResumeSection>
          <H2>🎓 Education</H2>
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
        </ResumeSection>

        <ResumeSection>
          <H2>🏆 Awards and Scholarships</H2>
          {data.resume.awards.map((item) => {
            return (
              <BulletPoint
                title={item.title}
                time={item.time}
                text={item.text}
              />
            );
          })}
        </ResumeSection>

        <ResumeSection>
          <H2>🔨 Work Experience</H2>
          {data.resume.experience.map((item) => {
            return (
              <BulletPoint
                title={item.title}
                time={item.time}
                place={item.place}
              />
            );
          })}
        </ResumeSection>

        <ResumeSection>
          <H2>✨ Skills</H2>
          {data.resume.skills.map((item) => {
            return <BulletPoint title={item.title} text={item.text} />;
          })}
        </ResumeSection>

        <ResumeSection>
          <H2>👥 Voluntary Engagement</H2>
          {data.resume.voluntary.map((item) => {
            return (
              <BulletPoint
                title={item.title}
                text={item.text}
                time={item.time}
              />
            );
          })}
        </ResumeSection>
      </Resume>
    </Layout>
  );
}

export const Head = () => <Seo title="Publications" />;

export default ResumePage;

const Resume = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 50px 0 50px 0;
  height: 1900px;

  @media (max-width: 1200px) {
    height: 100%;
  }
`;

const ResumeSection = styled.div`
  margin: 0px auto 50px auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  padding: 10px 30px 10px 30px;
  width: 500px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    pointer-events: none;
  }

  @media (max-width: 550px) {
    width: 75%;
  }
`;
