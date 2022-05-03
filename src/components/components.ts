import styled from "styled-components";
import styles from "./Style";

export const AppStyle = styled.div`
  text-align: center;
  background: rgb(100,46,112);
  background: linear-gradient(0deg, rgba(100,46,112,1) 6%, rgba(131,64,121,1) 33%, rgba(34,46,176,1) 100%);
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: white;
`;

export const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 80px;
  opacity: 0.6;
  border: 8px solid black;
  border-radius: 8px;
  background-color: ${styles.color.dialogBoxBackground};
  width: 50%;
  height: auto;
`;

export const YuukaSays = styled.span`
  display: flex;
  align-items: flex-start;
  margin-top: -40px;
  margin-bottom: 24px;
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  margin-right: 24px;
  font-style: italic;
`;

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
  background: none;
  margin: 8px;
  color: white;
  font-size: 24px;
  border: none;
`;

export const NextQuoteButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  color: ${styles.color.button};
  background: none;
  font-size: 16px;
  margin: 8px;
  margin-top: 40px;
  margin-bottom: -40px;
  padding: 8px 16px;
  border: solid 2px ${styles.color.button};
  border-radius: 8px;
`;
