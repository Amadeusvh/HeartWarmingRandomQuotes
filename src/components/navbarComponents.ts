import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../styles/Style";

export const NavbarTitle = styled.h3`
  margin-left: 16px;
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 48px;
  background-color: ${styles.color.navbarBackground};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 50%;
  align-items: baseline;
  justify-content: flex-start;
  padding-left: 16px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 50%;
  justify-content: flex-end;
  padding-right: 40px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 56;
  display: flex;
`;

export const NavbarButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 18px;
`;

export const NavbarButton = styled.button`
  cursor: pointer;
  background: none;
  margin: 8px;
  color: white;
  font-size: 24px;
  border: none;
`;

export const CreateQuoteButton = styled(Link)`
  background: none;
  padding-top: 3px;
  margin: 8px;
  color: white;
  font-size: 24px;
  border: none;
  text-decoration: none;
`;

export const GithubButton = styled.a`
  background: none;
  padding-top: 3px;
  margin: 8px;
  color: white;
  font-size: 24px;
  border: none;
  text-decoration: none;
`;
