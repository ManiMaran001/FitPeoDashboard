import React, { useMemo } from "react";
import { RiDashboard2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import PropTypes from 'prop-types'; 

import {
  StyledSidebar,
  SidebarLogoWrapper,
  StyledLogo,
  StyledText,
  SidebarContainer,
  SidebarNavigationContainer,
  StyledListContainer,
  SidebarMainContainer,
  StyledListIcon,
  SidebarFooter,
  StyledUserContainer,
  StyledImg,
  StyledClose,
} from "../Styles/SidebarStyles";

function Sidebar({ handleMenu, routerData, menuOpen }) {
  function getItem(name, label, icon, key, children) {
    return {
      name,
      label,
      icon,
      key,
      children,
    };
  }

  const sidebarRoute = useMemo(() => {
    return routerData?.map((item) => {
      if (item.layout === "/labs") {
        if (!item.submenu) {
          return getItem(item.name, item.label, item.icon, item.key, []);
        } else {
          let submenu = [];
          item.children?.forEach((e) => {
            return submenu.push(
              getItem(e.name, e.label, e.icon, e.key, e.children)
            );
          });
          return getItem(item.name, item.label, item.icon, item.key, submenu);
        }
      } else {
        return null;
      }
    });
  }, [routerData]);


  return (
    <StyledSidebar theme={{ main: menuOpen }}>
      <SidebarContainer>
        <SidebarLogoWrapper>
          <StyledLogo>
            <RiDashboard2Line />
          </StyledLogo>
          <StyledText variation="big"> Dashboard</StyledText>
          <StyledClose theme={{ main: menuOpen }}>
            <IoMdClose
              onClick={() => {
                handleMenu(false);
              }}
            />
          </StyledClose>
        </SidebarLogoWrapper>
        <SidebarNavigationContainer>
          <SidebarMainContainer>
            {sidebarRoute?.map((val) => (
              <React.Fragment key={val?.name}>
                <StyledListContainer>
                  <StyledListIcon variation="menuicon">
                    {val?.icon}
                  </StyledListIcon>
                  <StyledText variation="medium">{val?.label}</StyledText>
                  <StyledListIcon variation="arrowicon">
                    <MdOutlineKeyboardArrowRight />
                  </StyledListIcon>
                </StyledListContainer>
              </React.Fragment>
            ))}
          </SidebarMainContainer>
        </SidebarNavigationContainer>
        <SidebarFooter>
          <StyledImg src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1887574231.1711756800&semt=sph" />
          <StyledUserContainer>
            <StyledText variation="mini_md">Evano</StyledText>
            <StyledText variation="mini_sm">Project Manager</StyledText>
          </StyledUserContainer>
          <StyledListIcon variation="downarrowicon">
            <IoIosArrowDown />
          </StyledListIcon>
        </SidebarFooter>
      </SidebarContainer>
    </StyledSidebar>
  );
}

Sidebar.propTypes = {  
    routerData: PropTypes.array.isRequired,  
    menuOpen: PropTypes.bool.isRequired,  
    handleMenu: PropTypes.func 
}  

export default Sidebar;
