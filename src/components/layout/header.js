import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setHasScrolled(scrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer hasScrolled={hasScrolled}>
      <HeaderGroup>
        {buttons.map((button, index) => (
          <Link to={button.path} key={index}>
            <HeaderButton>
              {button.icon && <img src={button.icon} alt={button.label} />}
              {button.label}
            </HeaderButton>
          </Link>
        ))}
      </HeaderGroup>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0;
  z-index: 100;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  backdrop-filter: ${(props) => (props.hasScrolled ? "blur(10px)" : "none")};
  box-shadow: ${(props) =>
    props.hasScrolled ? "0 1px 20px rgba(0, 0, 0, 0.25)" : "none"};

  a {
    color: white;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const HeaderGroup = styled.div`
  z-index: 101;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;

  img {
    margin-right: 12px;
    vertical-align: middle;
    height: 20px;
    width: auto;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
  }
`;

const HeaderButton = styled.button`
  color: black;
  padding: 12px 20px;
  font-size: 20px;
  background: #ffffff;
  border: none;
  font-weight: 650;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 640px) {
    font-size: 16px;
    padding: 8px 16px;
  }

`;

const buttons = [
  { path: "/", label: "Home", icon: "/images/icons/avatar.png" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/publications", label: "Publications" },
  { path: "/resume", label: "Résumé" },
];
