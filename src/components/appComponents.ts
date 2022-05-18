import styled from "styled-components";
import styles from "../styles/Style";

export const AppStyle = styled.div`
  display: flex;
  text-align: center;
  background: linear-gradient(0deg, rgba(100,46,112,1) 6%, rgba(131,64,121,1) 33%, rgba(34,46,176,1) 100%);
  min-height: 100vh;
  min-width: 100vh;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: ${styles.color.text};
`;
