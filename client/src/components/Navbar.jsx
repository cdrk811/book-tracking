import React from 'react'
import styled from 'styled-components';
import { PersonRounded } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from '@mui/material';

const NavBarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 40px;
    align-items: center;
    box-sizing: border-box;
    color: ${({ theme }) => theme.text_primary };
    gap: 30px;
    background: ${({ theme }) => theme.bg };
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);

    @media (max-width: 768px) {
        padding: 16px;
    }
`;

const ButtonDiv = styled.div`
    font-size: 14px;
    cursor: pointer;
    max-width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.primary };
    border: 1px solid ${({ theme }) => theme.primary };
    border-radius: 12px;
    width: 100%;
    padding: 8px 10px;
    text-align: center;
    gap: 6px;

    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary};
    }
`;

const IcoButton = styled(IconButton)`
    color: ${({ theme }) => theme.primary } !important;
`;

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <NavBarDiv>
        <IcoButton onClick={() => setMenuOpen(!menuOpen) }>
            <MenuIcon />
        </IcoButton>
        <ButtonDiv>
            <PersonRounded />
            Login
        </ButtonDiv>
    </NavBarDiv>
  )
}

export default Navbar