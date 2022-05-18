import styled from "styled-components";
import styles from "../styles/Style";

export const ModalBlock = styled.div`
  background: ${styles.color.modalOverlayBackground};
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const ModalOverlay = styled.a`
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  cursor: default;
  position: absolute;
`;

export const ModalCloseButton = styled.button`
  background-color: ${styles.color.modalBackground};
  display: flex;
  border: none;
  margin-right: 8px;
  align-self: center;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  background: ${styles.color.modalBackground};
  flex-direction: column;
  justify-content: space-between ;
  padding: 8px;
  width: 50%;
  z-index: 10;
  animation: slide-down 0.2s ease 1;
  border-radius: 8px;
  box-shadow: 0 0.2rem 0.5rem ${styles.color.modalBoxShadow};
`;

export const ModalBody = styled.div`
  display: flex;
  text-align: justify;
  padding: 16px;
  margin: 8px;
  padding-top: 24px;
  font-size: 24px;
  color: ${styles.color.modalText};
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${styles.color.modalText};
  padding: 24px 8px 16px 8px;
`;

export const ModalTitle = styled.div`
  margin-left: 16px;
  font-size: 32px;
  font-weight: bold; 
`;

export const ModalFooter = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 40px;
  margin-right: 16px;
  padding: 10px 0px;
`;

export const ModalButton = styled.button`
  background: ${styles.color.button};
  color: ${styles.color.text};
  font-size: 16px;
  margin: 10px;
  padding: 8px 8px;
  border: 2px solid ${styles.color.button};
  border-radius: 8px;
  cursor: pointer;
`;
