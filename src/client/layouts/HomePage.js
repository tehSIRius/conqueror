import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class HomePage extends React.Component {
    render() {
        return (
            <AppBar position="absolute">
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h5" color="inherit" noWrap>
                        Conqueror
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default HomePage;