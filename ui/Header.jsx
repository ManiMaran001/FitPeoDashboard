import { Input } from "./Input";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import PropTypes from "prop-types";
import {
  StyledHeader,
  StyledHeadercontainer,
  StyledMenu,
  StyledParaText,
  BoxContainer,
  StyledIcon,
} from "../Styles/HeaderStyles";

function Header({ handleMenu }) {
  return (
    <StyledHeader>
      <StyledHeadercontainer>
        <StyledMenu>
          <IoMdMenu onClick={() => handleMenu(true)} />
        </StyledMenu>
        <StyledParaText>Hello Shahrukh 👋,</StyledParaText>
        <BoxContainer>
          <StyledIcon>
            <CiSearch />
          </StyledIcon>
          <Input type="name" placeholder="Search" />
        </BoxContainer>
      </StyledHeadercontainer>
    </StyledHeader>
  );
}

Header.propTypes = {
  handleMenu: PropTypes.func,
};

export default Header;
