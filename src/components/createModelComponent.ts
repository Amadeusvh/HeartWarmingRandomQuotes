import styled from "styled-components";
import styles from "../styles/Style";

export const CreateQuoteContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 80%;
  height: 70vh;
  opacity: 0.8;
  border: 8px solid black;
  border-radius: 8px;
  background-color: ${styles.color.dialogBoxBackground};
`;
