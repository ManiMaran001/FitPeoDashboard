import styled from "styled-components";
import { Input } from "./Input";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import PropTypes from 'prop-types'; 

function Header({ handleMenu }) {
  const StyledHeader = styled.header`
    background-color: var(--color-grey-200);
    grid-column: center-start/center-end;
    grid-row: 1/2;
    padding-bottom: 3rem;
    @media (max-width: 34em) {
      /* height: 20rem; */
    }
    /* box-shadow: 0rem 2rem 1rem 3rem rgba(0,0,0,0.1);  */
  `;
  const StyledHeadercontainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0rem;
    @media (max-width: 34em) {
      margin-top: 2rem;
      gap: 5rem;
      align-items: center;
    }
  `;

  const StyledParaText = styled.p`
    font-weight: 500;
    font-size: 1.8rem;
    color: var(--color-black);
  `;

  const BoxContainer = styled.div`
    display: flex;
    gap: 0.2rem;
    align-items: center;
    padding: 0.3rem 0.4rem;
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-sm);
    @media (max-width: 34em) {
      width: 10rem;
    }
  `;
  const StyledIcon = styled.span`
    font-size: 2rem;
    display: flex;
  `;

  const StyledMenu = styled.div`
    display: none;
    @media (max-width: 34em) {
      display: block;
      font-size: 4rem;
    }
  `;

  

  return (
    <StyledHeader>
      <StyledHeadercontainer>
        <StyledMenu>
          <IoMdMenu onClick={() => handleMenu(true)} />
        </StyledMenu>
        <StyledParaText>Hello Sharukh 👋,</StyledParaText>
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
    handleMenu: PropTypes.func 
}  


export default Header;
