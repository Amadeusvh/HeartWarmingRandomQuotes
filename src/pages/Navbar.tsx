import { 
  CreateQuoteButton,
  GithubButton,
  LeftContainer,
  NavbarButtonsContainer, 
  NavbarContainer, 
  NavbarInnerContainer, 
  NavbarTitle, 
  RightContainer 
} from "../components/navbarComponents"
import { PlusCircle, Github} from "@styled-icons/bootstrap";
import AboutModal from "./AboutModal";

const Navbar = () => {

  return (
    <NavbarContainer>

      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarTitle>Heart Warming Random Quotes</NavbarTitle>
        </LeftContainer>

        <RightContainer>
          <NavbarButtonsContainer>

            <CreateQuoteButton to="/new-quote">
              <PlusCircle size={24}/> Create new quote
            </CreateQuoteButton>

            <AboutModal />
            <GithubButton target="#" href="https://github.com/Amadeusvh">
              <Github size={24}/> Github
            </GithubButton>
          </NavbarButtonsContainer>
        </RightContainer>
      </NavbarInnerContainer>

    </NavbarContainer>
  )
}

export default Navbar;
