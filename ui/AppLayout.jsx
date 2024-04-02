import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { RouterData } from "../data/RouterData";
import { useState } from "react";

const StyledAppLayout = styled.div`
  background-color: var(--color-white);
  position: relative;
  display: grid;
  background-color: #f9f9f9;
  grid-template-columns:
    [sidebar-start]23rem[sidebar-end full-start] minmax(3rem, 1fr)
    [center-start]repeat(12, [col-start] minmax(min-content, 14rem))
    [center-end] minmax(3rem, 1fr)
    [full-end];
  grid-template-rows: 10vh min-content;
  @media (max-width: 34em) {
    grid-template-columns:
      [full-start] minmax(3rem, 1fr)
      [center-start]repeat(12, [col-start] minmax(min-content, 14rem))
      [center-end] minmax(3rem, 1fr)
      [full-end];
    grid-template-rows: min-content min-content;
  }
  @media (min-width: 34em) and (max-width: 59em) {
    grid-template-columns:
      [full-start] minmax(3rem, 1fr)
      [center-start]repeat(12, [col-start] minmax(min-content, 14rem))
      [center-end] minmax(3rem, 1fr)
      [full-end];
    grid-template-rows: min-content min-content;
  }
  
`;

const StyledMain = styled.main`
  grid-column: center-start/center-end;
  grid-row: 2/-1;
`;

function AppLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (data) => {
    setOpenMenu(data);
  };
  return (
    <div style={{height:"100%"}}>
      <StyledAppLayout>
        <Header handleMenu={handleOpenMenu} menuOpen={openMenu} />
        <Sidebar
          handleMenu={handleOpenMenu}
          routerData={RouterData}
          menuOpen={openMenu}
        />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledAppLayout>
    </div>
  );
}

export default AppLayout;
