import { Fragment } from "react";
import { 
  ModalBlock, 
  ModalBody, 
  ModalCloseButton, 
  ModalContainer, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  ModalTitle 
} from "../components/modalComponents";
import { X } from "@styled-icons/bootstrap";
import { ModalType } from "../types/modalType";


const Modal = ({ title, footer, children, show, handleClose}: ModalType ) => {

  return (
    <Fragment>
      {show && (
        <ModalBlock>
          <ModalOverlay onClick={handleClose}>
          </ModalOverlay>
          <ModalContainer>
            
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalCloseButton onClick={handleClose} ><X size={24} /></ModalCloseButton>
            </ModalHeader>

            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>

          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};

export default Modal;
