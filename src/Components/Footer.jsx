import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

import useStyles from './styles';

export default function Footer() {
    const classes = useStyles();

    return (
        <AppBar className={classes.footer} position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2022 Zach Tippit
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}