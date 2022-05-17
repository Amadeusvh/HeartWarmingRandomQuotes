import { CardText } from "@styled-icons/bootstrap";
import { useState } from "react";
import { NavbarButton } from "../components/navbarComponents";
import { ModalButton } from "../components/modalComponents";
import Modal from "./Modal";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ab odio officia aliquam illum velit, officiis cumque quisquam quas rerum omnis voluptatem eveniet, odit distinctio amet quod ea nesciunt?
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default AboutModal;
