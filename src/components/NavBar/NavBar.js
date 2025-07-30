import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavBarItems from './NavBarItems';

const NavBar = () => {
    return (
        <>
            <AppBar position="fixed" sx={{ 
                backgroundColor: '#1976d2', 
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)',
                zIndex: 1400 
            }}>
                <Toolbar sx={{ justifyContent: 'start' }}>
                    <NavBarItems />
                </Toolbar>
            </AppBar>
            <Box sx={{ height: 64 }} />
        </>
    );
}

export default NavBar;
