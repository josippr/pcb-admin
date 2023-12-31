import React, { useState, useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

import AppLogotype from '../../assets/branding/logoAppBar.svg';
import Navbar from "../Navbar/Navbar";
import CurrentUser from '../CurrentUser/CurrentUser';
import MobileNavbar from '../MobileNavbar/MobileNavbar';

import { NavItem } from "../../Types";
import { auth } from "../../firebase";
import { onAuthStateChanged, User } from 'firebase/auth';


//TODO: Replace with actual routes
//TODO: Optimize mobile navigation

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Users', path: '/users' },
  { name: 'Blog posts', path: '/' },
  { name: 'Info', path: '/' }
];

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  color: 'white',
	width: '100%',
	height: '76px',
	position: 'fixed',
  zIndex: '999',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Logotype = styled('img')({
  marginTop: '10px',
});

const NavigationBar = styled(Navbar)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '20px',
});

const CurrentUserWrapper = styled(CurrentUser)({
  marginLeft: 'auto',
  marginTop: '-10px',
});

const AppLogo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

const Header: React.FC = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 900);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <AppLogo>
          <Logotype src={AppLogotype} />
          {!isScreenSmall && <NavigationBar navItems={navItems} />}
        </AppLogo>
        {isScreenSmall ? (
          <MobileNavbar user={user} />
        ) : (
          <CurrentUserWrapper />
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
