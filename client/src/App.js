import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Calendar from './pages/Calendar';
import Favourites from './pages/Favourites';
import BookDetails from './pages/BookDetails';
import DisplayBook from './pages/DisplayBook';
// import Profile from './pages/Profile';

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight };
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  // hooks
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme }>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen} 
              setDarkMode={setDarkMode} 
              darkMode={darkMode} 
            />
          )}
          
          <Frame>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
            <Routes>
              <Route path='/' exact element={<Dashboard />} />
              <Route path='/search' exact element={<Search />} />
              <Route path='/schedule' exact element={<Calendar />} />
              <Route path='/favourites' exact element={<Favourites />} />
              <Route path='/book/:id' exact element={<BookDetails />} />
              <Route path='/show_books/:type' exact element={<DisplayBook />} />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
