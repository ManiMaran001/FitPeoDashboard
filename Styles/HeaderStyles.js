import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-grey-200);
  grid-column: center-start/center-end;
  grid-row: 1/2;
  padding-bottom: 3rem;
`;
export const StyledHeadercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;

  @media (max-width: 34em) {
    margin-top: 2rem;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 44em) {
    margin-top: 2rem;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 48em) and (max-width: 59em) {
    margin-top: 2rem;
    gap: 5rem;
    justify-content: space-between;
  }
`;

export const StyledParaText = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--color-black);
`;

export const BoxContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
   background-color: ${(props) => props.theme.main==="header"?"#fff":"var(--color-grey-0)"};
  padding: 0.3rem 0.4rem;
  border-radius: var(--border-radius-sm);
  @media (max-width: 34em) {
    width: 5rem;
  }
  @media (max-width: 44em) {
    width: 20rem;
  }
  @media (min-width: 48em) and (max-width: 59em) {
    width: 25rem;
  }
`;
export const StyledIcon = styled.span`
  font-size: 2rem;
  display: flex;
`;

export const StyledMenu = styled.div`
  display: none;
  @media (max-width: 34em) {
    display: block;
    font-size: 4rem;
  }

  @media (min-width: 34em) and (max-width: 59em) {
    display: block;
    font-size: 4rem;
  }
`;
