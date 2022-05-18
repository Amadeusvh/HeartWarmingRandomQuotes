import styled from "styled-components";
import styles from "../styles/Style";
import { Link } from "react-router-dom";

export const CreateQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  opacity: 0.8;
  border: 8px solid ${styles.color.border};
  border-radius: 8px;
  background-color: ${styles.color.dialogBoxBackground};
`;

export const InputContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled(Link)`
  display: flex;
  align-self: flex-start;
  color: ${styles.color.text};
  background: ${styles.color.button};
  font-size: 16px;
  padding: 8px 8px;
  margin: 8px;
  border: 2px none;
  border-radius: 8px;
  cursor: pointer;
`;

export const NewQuoteForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const NewQuoteLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputQuoteText = styled.textarea`
  height: 80px;
  width: 720px;
  margin: 16px;
  border: 4px solid ${styles.color.border};
  border-radius: 8px;
  font-size: 16px;
  padding: 8px;
`;

export const InputAuthorText = styled.input`
  margin: 16px;
  font-size: 16px;
  padding: 8px;
  border: 4px solid ${styles.color.border};
  border-radius: 8px;
`;

export const InputButton = styled.input`
  align-self: center;
  background: ${styles.color.button};
  color: ${styles.color.text};
  font-size: 16px;
  margin: 16px;
  padding: 8px 8px;
  width: 20%;
  border: 2px none;
  border-radius: 8px;
  cursor: pointer;
`;
