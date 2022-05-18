import { CardText } from "@styled-icons/bootstrap";
import { useState } from "react";
import { NavbarButton } from "./navbarComponents";
import { ModalButton } from "./modalComponents";
import Modal from "./Modal";
import { aboutText } from "./aboutText";

const AboutModal = () => {
  
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    return setShow(false);
  }

  return (
    <div>
      <NavbarButton onClick={handleShow}>
        <CardText size={24}/> About
      </NavbarButton>

      <Modal
        show = {show}
        handleClose = {handleClose}
        title = "About HWRQ"
        footer = {
          <ModalButton onClick={handleClose}>Got it!</ModalButton>
        }
      >
        <div>
          <span>
            {aboutText()}
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default AboutModal;
