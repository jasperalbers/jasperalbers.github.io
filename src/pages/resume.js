import React from "react";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";

import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import BulletPoint from "../components/elements/BulletPoint";
import { H3 } from "../components/styles/TextStyles";
import { themes } from "../components/styles/ColorStyles"
import { MoveUp } from "../components/animations/MoveUp"

import data from "../data/resume.json";

function ResumePage() {
  return (
    <Layout>
      <HeroSection title="Résumé" description="My life until now!" />
      <Resume>
        <ResumeSection>
          <H3>🎓 Education</H3>
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
          <H3>🏆 Awards and Scholarships</H3>
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
          <H3>🔨 Work Experience</H3>
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
          <H3>✨ Skills</H3>
          {data.resume.skills.map((item) => {
            return <BulletPoint title={item.title} text={item.text} />;
          })}
        </ResumeSection>

        <ResumeSection>
          <H3>👥 Voluntary Engagement</H3>
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
  margin: 50px 0;
  gap: 30px;
  max-height: 3000px;

  > * {
    opacity: 0;
    animation: ${MoveUp} 3s 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }

  @media (max-width: 1250px) {
    max-height: 100%;
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

  @media (max-width: 650px) {
    width: 75%;
  }

    @media (prefers-color-scheme: dark) {
    background: ${themes.dark.card.backgroundColor};
    box-shadow: ${themes.dark.card.boxShadow};
  }
`;
