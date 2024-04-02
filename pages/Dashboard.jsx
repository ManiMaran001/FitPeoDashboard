import React from "react";
import styled, { css } from "styled-components";
import { BiUpArrowAlt } from "react-icons/bi";
import { CiBadgeDollar } from "react-icons/ci";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RxLockClosed } from "react-icons/rx";

const DashboardShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: min-content min-content;
  gap: 4rem;

  @media (max-width: 34em) {
    grid-template-columns: 30rem;
    justify-content: center;
    margin-bottom: 4rem;
  }
`;

const CaseContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: 0 1.4rem 3rem 1rem rgba(0, 0, 0, 0.04);
  background-color:var(--color-white);
`;

const IconContainer = styled.div`
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

const EarnContainer = styled.div`
  font-size: 1rem;
`;

const variations = {
  primaryTag: css`
    font-size: 1rem;
    color: var(--color-grey-500);
  `,
  secondaryTag: css`
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--color-black);
  `,
  tertiaryTag: css`
    font-size: 1rem;
  `,
  newbold:css`
    font-size: 1.6rem;
    font-weight: 700;
  `,
  minibold: css`
    font-size: 1.4rem;
    font-weight: 400;
  `
};

const StyledPrimary = styled.p`
  ${(props) => variations[props.variant]}
`;
const StyledPriamrySpan = styled.span`
  color: var(--color-green-400);
`;

const EarningsData = [
  {
    id: "1",
    icon: <CiBadgeDollar />,
    summaryTag: "Earnings",
    amount: `984`,
    Percent: "37% this month",
    color: "var(--color-green-400)",
    bgcolor: "rgba(0, 150, 136,0.07)",
  },
  {
    id: "2",
    summaryTag: "Orders",
    amount: `2.4`,
    icon: <HiOutlineDocumentChartBar />,
    Percent: "2% this month",
    color: "var(--color-purple-200)",
    bgcolor: "rgba(103, 58, 183,0.2)",
  },
  {
    id: "3",
    summaryTag: "Balance",
    amount: `2.4`,
    icon: <MdOutlineAccountBalanceWallet />,
    Percent: "2% this month",
    color: "var(--color-cyan-200)",
    bgcolor: `rgba(0, 188, 212,0.2)`,
  },
  {
    id: "4",
    summaryTag: "Total Sales",
    amount: `8.9`,
    icon: <RxLockClosed />,
    Percent: "2% this week",
    color: "var(--color-pink-200)",
    bgcolor: "var(--color-pink-light)",
  },
];

const DashBoardSalesChart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  gap: 2rem;
  @media (max-width: 34em) {
    grid-template-columns: 1fr;
    grid-template-rows: 100vw;
    gap: 8rem;
  }
`;

const DashBoardBarChart = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  background: var(--color-white);
  box-shadow: var(--shadow-md);
`;

const DashboardPieChart = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  background: var(--color-white);
  box-shadow: var(--shadow-md);
`;
const DashBoardBarChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
`;

const BarChartSelectField = styled.select`
  outline: none;
  border: none;
  min-width: 10rem;
  padding: 0.3rem 1rem;
  background-color: var(--color-grey-0);
  &:focus {
    outline: none;
  }
`;

const BarChart = styled.div``;

const BarChartData = [
  {
    id: "1",
    month: "Jan",
    percent: "70%",
    active:false
  },
  {
    id: "2",
    month: "Feb",
    percent: "50%",
    active:false
  },
  {
    id: "3",
    month: "Mar",
    percent: "100%",
    active:false
  },
  {
    id: "4",
    month: "Apr",
    percent: "65%",
    active:false
  },
  {
    id: "5",
    month: "May",
    percent: "30%",
    active:false
  },
  {
    id: "6",
    month: "Jun",
    percent: "60%",
    active:false
  },
  {
    id: "7",
    month: "Jul",
    percent: "80%",
    active:false
  },
  {
    id: "8",
    month: "Aug",
    percent: "100%",
    active:true
  },
  {
    id: "9",
    month: "Sep",
    percent: "90%",
    active:false
  },
  {
    id: "10",
    month: "Oct",
    percent: "56%",
    active:false
  },
  {
    id: "11",
    month: "Nov",
    percent: "20%",
    active:false
  },
  {
    id: "12",
    month: "Dec",
    percent: "48%",
    active:false
  },
];

function Dashboard() {
  return (
    <>
      <DashboardShowcaseContainer>
        {EarningsData?.map((val) => (
          <>
            <CaseContainer key={val?.id}>
              <IconContainer
                theme={{ main: `${val?.bgcolor}`, secondary: `${val?.color}` }}
              >
                {val?.icon}
              </IconContainer>
              <EarnContainer>
                <StyledPrimary variant="primaryTag">
                  {val?.summaryTag}
                </StyledPrimary>
                <StyledPrimary variant="secondaryTag">
                  ${val?.amount}K
                </StyledPrimary>
                <StyledPrimary variant="tertiaryTag">
                  <StyledPriamrySpan>
                    <BiUpArrowAlt /> {val?.Percent}
                  </StyledPriamrySpan>{" "}
                  this months
                </StyledPrimary>
              </EarnContainer>
            </CaseContainer>
          </>
        ))}
      </DashboardShowcaseContainer>

      <DashBoardSalesChart>
        <DashBoardBarChart>
          <DashBoardBarChartContainer>
            <div>
              <StyledPrimary variant="secondaryTag">Overview</StyledPrimary>
              <StyledPrimary variant="primaryTag">
                Monthly Earning
              </StyledPrimary>
            </div>
            <BarChartSelectField type="text">
              <option value="Quartely">Quartely</option>
            </BarChartSelectField>
          </DashBoardBarChartContainer>
          <BarChart>
            <ul className="chart">
              {BarChartData?.map((val) => (
                <React.Fragment key={val?.id}>
                  <li>
                    <span
                      style={{ height: val?.percent,background:`${val?.active?'rgb(48, 79, 254)':'rgba(225, 190, 231,0.3)'}` }}
                      title={val?.month}
                    ></span>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </BarChart>
        </DashBoardBarChart>
        <DashboardPieChart>
          <StyledPrimary variant="secondaryTag">Customers</StyledPrimary>
          <StyledPrimary variant="primaryTag">
            Customers that buy an product{" "}
          </StyledPrimary>
          <div className="container">
            <div className="donut">
              <div className="textContainer">
                <StyledPrimary variant="newbold">65%</StyledPrimary>
                <StyledPrimary variant="minibold">
                  Total New <br />
                  Customers
                </StyledPrimary>
              </div>
            </div>
          </div>
        </DashboardPieChart>
      </DashBoardSalesChart>
    </>
  );
}

export default Dashboard;
