import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ekLogo from '../img/ek-logo.png';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useStyles from './styles';

const ResponsiveAppBar = () => {
    
    const pages = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Listen',
            link: 'listen'
        },
        {
            title: 'Extra Content',
            link: 'extra'
        },
        {
            title: 'Fan Art & Interviews',
            link: 'art'
        },
        {
            title: 'Help Get Us Published!',
            link: 'publish'
        },
        {
            title: 'Subscribe',
            link: 'subscribe'
        },];

    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    return (
        <AppBar position="static" className={clsx(classes.blkBG, classes.navbar)}>
            <Container maxWidth="xl" className={clsx(classes.blkBG, classes.navbar)}>
            <Toolbar disableGutters className={clsx(classes.blkBG, classes.navbar)}>
                <img src={ekLogo} alt="Logo" className={classes.logo} />

                <Box className={classes.navDropdown} sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                        display: { xs: 'block', lg: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                        <MenuItem component={Link} to={page.link} key={page.title} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.title}</Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{flexGrow: 1, display: { xs: 'none', lg: 'flex' } }} className={classes.test}>
                {pages.map((page) => (
                    <Button
                        component={Link}
                        to={page.link}
                        key={page.title}
                        align="center"
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white'}}
                        fullWidth="true"
                        >
                        {page.title}
                    </Button>
                ))}
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;