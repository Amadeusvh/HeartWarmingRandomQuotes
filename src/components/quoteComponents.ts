import styled from "styled-components";
import styles from "../styles/Style";

export const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 80px;
  opacity: 0.8;
  border: 8px solid ${styles.color.border};
  border-radius: 8px;
  background-color: ${styles.color.dialogBoxBackground};
  width: 50%;
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

export const Content = styled.span`
  word-wrap: break-word;
  text-align: justify;
`;

export const AuthorName = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  margin-right: 24px;
  font-style: italic;
`;

export const NextQuoteButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  background: ${styles.color.button};
  color: ${styles.color.text};
  font-size: 16px;
  margin: 8px;
  margin-top: 40px;
  margin-bottom: -40px;
  padding: 8px 16px;
  border: 2px solid ${styles.color.button};
  border-radius: 8px;
  cursor: pointer;
`;
