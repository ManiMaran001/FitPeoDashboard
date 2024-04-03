import styled, { css } from "styled-components";

export const DashboardShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: min-content min-content\;
  gap: 4rem;

  @media (max-width: 34em) {
    grid-template-columns: 30rem;
    justify-content: center;
    margin-bottom: 4rem;
  }
  @media (max-width: 44em) {
    grid-template-columns: 30rem;
    justify-content: center;
    margin-bottom: 4rem;
  }
  @media (min-width: 48em) and (max-width: 59em) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 4rem;
  }
`;

export const CaseContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: 0 1.4rem 3rem 1rem rgba(0, 0, 0, 0.04);
  background-color: var(--color-white);
`;

export const IconContainer = styled.div`
  padding: 0.5em;
  display: flex;
  padding: 2rem;
  font-size: 3rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main};
  border-radius: 50%;
  color: ${(props) => props.theme.secondary};
`;

export const EarnContainer = styled.div`
  font-size: 1rem;
`;

export const variations = {
  primaryTag: css`
    font-size: 1rem;
    color: var(--color-grey-500);
  `,
  secondaryflex:css`
  flex:1;
  font-weight: 600;
    font-size: 1.5rem;
    color: var(--color-black);
  `,
  secondaryTag: css`
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--color-black);
  `,
  tertiaryTag: css`
    font-size: 1rem;
  `,
  newbold: css`
    font-size: 1.6rem;
    font-weight: 700;
  `,
  minibold: css`
    font-size: 1.4rem;
    font-weight: 400;
  `,
};

export const StyledPrimary = styled.p`
  ${(props) => variations[props.variant]}
`;
export const StyledPriamrySpan = styled.span`
  color: var(--color-green-400);
`;

export const DashBoardSalesChart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  gap: 2rem;
  @media (max-width: 34em) {
    grid-template-columns: 20rem;
    grid-template-rows: 100vw;
    gap: 8rem;
    justify-content: center;
  }
  @media (max-width: 44em) {
    grid-template-columns: 27rem;
    grid-template-rows: auto;
    gap: 8rem;
    justify-content: center;
  }
  @media (min-width: 48em) and (max-width: 59em) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 8rem;
    justify-content: center;
  }
`;

export const DashBoardBarChart = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  background: var(--color-white);
  box-shadow: var(--shadow-md);
`;

export const DashboardPieChart = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  background: var(--color-white);
  box-shadow: var(--shadow-md);
`;
export const DashBoardBarChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
`;

export const BarChartSelectField = styled.select`
  outline: none;
  border: none;
  min-width: 10rem;
  padding: 0.3rem 1rem;
  background-color: var(--color-grey-0);
  &:focus {
    outline: none;
  }
`;

export const BarChart = styled.div`
  height: 40vh;
  @media (max-width: 34em) {
    height: 70vh;
    overflow-x: scroll;
  }
  @media (max-width: 44em) {
    height: 30rem;
    overflow-x: scroll;
  }
  @media (min-width: 48em) and (max-width: 59em) {
    height: 70vh;
  }
`;
export const TableContainer=styled.div`
  margin-top:4rem;
  max-width :140rem;
  background-color: #fff;
  border-radius: 1rem;
  max-height:100%;
  @media (max-width:50em){
    display: none;
  }
`