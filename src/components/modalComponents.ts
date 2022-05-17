import styled from "styled-components";
import styles from "../styles/Style";

export const ModalBlock = styled.div`
  background: ${styles.color.modalOverlaBackground};
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
  background-color: white;
  display: flex;
  border: none;
  margin-right: 8px;
  align-self: center;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  background: #ffffff;
  flex-direction: column;
  justify-content: space-between ;
  margin-bottom: 40px;
  max-height: 100vh;
  max-width: 880px;
  width: 50%;
  height: 45%;
  z-index: 1;
  animation: slide-down 0.2s ease 1;
  border-radius: 8px;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const ModalBody = styled.div`
  display: flex;
  text-align: justify;
  margin: 16px;
  font-size: 24px;
  color: #303742;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.div`
  margin-left: 16px;
  font-size: 30px;
  font-weight: bold; 
`;

export const ModalFooter = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 40px;
  margin-right: 16px;
  padding: 10px 0px;
  text-align: right;
`;

export const ModalButton = styled.button`
  background: ${styles.color.button};
  color: white;
  font-size: 16px;
  margin: 10px;
  padding: 8px 8px;
  border: 2px solid ${styles.color.button};
  border-radius: 8px;
  cursor: pointer;
`;
