import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ekLogo from '../img/ek-logo.png';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { textAlign } from '@mui/system';
    
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
    const pages = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Listen',
            link: '/listen'
        },
        {
            title: 'Extra Content',
            link: '/extra'
        },
        {
            title: 'Fan Art',
            link: '/art'
        },
        {
            title: 'Get Us Published!',
            link: '/publish'
        }];

    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className={classes.blkBG}>
            <Container maxWidth="xl" className={classes.blkBG}>
            <Toolbar disableGutters className={classes.blkBG}>
                <img src={ekLogo} alt="Logo" className={classes.logo} />
                {/* <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 5, pr: 6, display: { xs: 'none', md: 'flex' } }}
                >
                Evening's Kingdom
                </Typography> */}

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                    display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                    <MenuItem component={Link} to={page.link} key={page.title} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        component={Link}
                        to={page.link}
                        key={page.title}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, mr: 12, color: 'white', display: 'block'}}
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