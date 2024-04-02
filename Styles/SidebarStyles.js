import styled, { css } from "styled-components";

const variations = {
  mini_sm: css`
    font-size: 0.8rem;
    color: var(--color-grey-500);
  `,
  mini_md: css`
    font-size: 1rem;
  `,
  medium: css`
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 1.4px;
    flex: 1;
  `,
  big: css`
    font-size: 1.6rem;
    font-weight: 500;
  `,
};

const animateVariant = {
  menuicon: css`
    transition: all 0.3s ease-in;
    &:hover {
      color: #42a5f5;
    }
  `,
  downarrowicon: css`
    color: var(--color-grey-500);
    font-size: 1.4rem;
  `,
  arrowicon: css`
    color: var(--color-white);
  `,
};

export const StyledSidebar = styled.aside`
  position: fixed;
    width: 23rem;
    top: 0;
    bottom: 0;
  background-color: var(--color-indigo-700);
  grid-row: 1/-1;
  grid-column: sidebar-start/sidebar-end;
  color: var(--color-grey-100);
  
  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/
  @media (max-width: 34em){
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    height: 100%;
    transform: ${(props) =>
      props.theme.main ? "translatex(0)" : "translatex(-100%)"};
    transition: transform 0.4s ease-in-out;
  }
  @media (min-width: 34em) and (max-width:59em) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    height: 100%;
    transform: ${(props) =>
      props.theme.main ? "translatex(0)" : "translatex(-100%)"};
    transition: transform 0.4s ease-in-out;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  padding: 0.8rem 1rem;

  @media (min-width: 34em ) and (max-width:75em)  {
    height: 100%;
  }
`;
export const SidebarLogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  height: 5rem;
  position: relative;
`;
export const StyledLogo = styled.div`
  display: flex;
  font-size: 2.8rem;
`;
export const StyledText = styled.p`
  ${(props) => variations[props.variation]}
`;
export const SidebarNavigationContainer = styled.div`
  margin-top: 3rem;
  flex: 1;
`;

export const SidebarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SidebarFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-indigo-light);
  border-radius: 0.4rem;
  padding: 0.8rem 0.8rem;
`;

export const StyledListContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: var(--color-grey-500);
  padding: 0.8rem 0.8rem;
  border-radius: 0.4rem;
  /* background-color: var(--color-indigo-light); */
`;

export const StyledListIcon = styled.div`
  display: flex;
  ${(props) => animateVariant[props.variation]}
`;

export const StyledUserContainer = styled.div`
  flex: 1;
`;
export const StyledImg = styled.img`
  border-radius: 50%;
  max-width: 30px;
  height: 30px;
`;

export const StyledClose = styled.div`
visibility: hidden;
@media (max-width:34em){
  visibility: visible;
    font-size: 3rem;
    position: absolute;
    top: -5px;
    right: -25px;
    color: rgb(25, 118, 210);
    background:var(--color-white);
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    box-shadow: 0 0 2rem 2rem rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${(props) =>
      props.theme.main ? "translatex(0)" : "translatex(-100%)"};
    transition: transform 0.4s ease-in-out;
}
  @media (min-width: 34em) and (max-width:59em){
    visibility: visible;
    font-size: 3rem;
    position: absolute;
    top: -5px;
    right: -25px;
    color: rgb(25, 118, 210);
    background:var(--color-white);
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    box-shadow: 0 0 2rem 2rem rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${(props) =>
      props.theme.main ? "translatex(0)" : "translatex(-100%)"};
    transition: transform 0.4s ease-in-out;
  }
`;
