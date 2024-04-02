import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { BarChartData, EarningsData } from "../data/BarchartData";
import {
  DashBoardBarChart,
  DashBoardBarChartContainer,
  DashBoardSalesChart,
  DashboardPieChart,
  DashboardShowcaseContainer,
  CaseContainer,
  IconContainer,
  EarnContainer,
  StyledPriamrySpan,
  StyledPrimary,
  BarChart,
  BarChartSelectField
} from "../Styles/DashboardStyle";

function Dashboard() {
  return (
    <>
      <DashboardShowcaseContainer>
        {EarningsData?.map((val) => (
          <React.Fragment key={val?.id}>
            <CaseContainer >
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
          </React.Fragment>
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
                      style={{
                        height: val?.percent,
                        background: `${
                          val?.active
                            ? "rgb(48, 79, 254)"
                            : "rgba(225, 190, 231,0.3)"
                        }`,
                      }}
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
