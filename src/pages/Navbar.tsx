import { 
  LeftContainer, 
  NavbarButton, 
  NavbarButtonsContainer, 
  NavbarContainer, 
  NavbarInnerContainer, 
  NavbarTitle, 
  RightContainer 
} from "../components/components"
import { PlusCircle, Github, CardText } from "@styled-icons/bootstrap";

const Navbar = () => {

  return (
    <NavbarContainer>

      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarTitle>Heart Warming Random Quotes</NavbarTitle>
        </LeftContainer>

        <RightContainer>
          <NavbarButtonsContainer>
            <NavbarButton><PlusCircle size={24}/> Create new quote</NavbarButton>
            <NavbarButton><CardText size={24}/> About</NavbarButton>
            <NavbarButton><Github size={24}/> Github</NavbarButton>
          </NavbarButtonsContainer>
        </RightContainer>
      </NavbarInnerContainer>

    </NavbarContainer>
  )
}

export default Navbar;
