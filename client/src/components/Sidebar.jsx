import React from 'react'
import styled from 'styled-components'
import { HomeRounded, CloseRounded, SearchRounded, CalendarMonthRounded, FavoriteRounded, LightModeRounded, LogoutRounded, DarkModeRounded, CloudUploadRounded } from "@mui/icons-material";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
    flex: 0.5;
    flex-direction: column;
    height: 100vh;
    display: flex;
    // box-sizing: border-box;
    // align-items: flex-start;
    background-color: ${({ theme }) => theme.bg };
    color: ${({ theme }) => theme.text_primary };

    @media (max-width: 1100px) {
        position: fixed;
        z-index: 1000;
        width: 100%;
        max-width: 270px;
        left: ${({ menuOpen }) => menuOpen ? "0" : "-100%"};
        transition: 0.3s ease-in-out;
    }
`;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px;
`;

const Logo = styled.div`
    color: ${({ theme }) => theme.primary };
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-weight: bold;
    font-size: 20px;
    margin: 16px 0px;
`;

const Image = styled.img`
    height: 40px;
`;

const Close = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 1100px) {
        display: block;
    }
`;

const Elements = styled.div`
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_secondary };

    &:hover {
        background-color: ${({ theme }) => theme.text_secondary + 50 };
    }
`;

const NavText = styled.div`
    padding: 12px 0px;
`;

const HR = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.text_secondary + 50 };
    margin: 10px 0px;
`;

const Sidebar = ({ menuOpen, setMenuOpen, setDarkMode, darkMode }) => {
    
    const menuItems = [
        {
            link: "/",
            name: "Dashboard",
            icon: <HomeRounded />
        },
        {
            link: "/search",
            name: "Search",
            icon: <SearchRounded />
        },
        {
            link: "/schedule",
            name: "Calendar",
            icon: <CalendarMonthRounded />
        },
        {
            link: "/favourites",
            name: "Favourites",
            icon: <FavoriteRounded />
        }
    ]

    const buttons = [
        {
            fun: () => console.log('upload'),
            name: "Upload",
            icon: <CloudUploadRounded />
        },
        {
            fun: () => setDarkMode(!darkMode),
            name: darkMode ? "Light Mode" : "Dark Mode",
            icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />
        },
        {
            fun: () => console.log('logout'),
            name: "Log out",
            icon: <LogoutRounded />
        }
    ]

  return (
    <MenuContainer menuOpen={menuOpen}>
        <Flex>
            <Logo>
                <Image src={logo} /> BOOK TRACKER
            </Logo>
            <Close onClick={() => setMenuOpen(!menuOpen)}>
                <CloseRounded />
            </Close>
        </Flex>
        {menuItems.map((menuItem) => (
            <Link to={menuItem.link} style={{ textDecoration: "none", color: "inherit" }}>
                <Elements>
                    {menuItem.icon}
                    <NavText>{menuItem.name}</NavText>
                </Elements>
            </Link>
        ))}
        <HR />
        {buttons.map((button) => (
            <Elements onClick={button.fun}>
                {button.icon}
                <NavText>{button.name}</NavText>
            </Elements>
        ))}
    </MenuContainer>
  )
}

export default Sidebar