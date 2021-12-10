import React from 'react';
import { Typography, TextField, Box, Button, Link } from '@mui/material';
import clsx from 'clsx';
import EKTitle from '../img/ek-blk-alpha.png';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';

import useStyles from './styles';

let responsiveTheme = createTheme();
responsiveTheme = responsiveFontSizes(responsiveTheme);

const Subscribe = () => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.home, classes.whiteBG)}>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.titleBG)}>
                <Typography variant="h6"align="center" className={clsx(classes.pad24)}>
                    On their epic quest for revenge, unlikely friends journey across an ancient, magical world...
                </Typography>
                <img src={EKTitle} alt="Title" className={clsx(classes.topPad24, classes.EKTitle)} />
                <ThemeProvider theme={responsiveTheme}>
                    <Typography variant="h4" align="center" color="white" className={clsx(classes.picTextBG, classes.pad24)}>
                        WRITTEN AND READ BY PAULA SCHMIDT
                    </Typography>
                </ThemeProvider>
            </div>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.splashText, classes.pad24)}>
                <Typography variant="h4" align="center">
                    New to EK? Listen to the first episode below!
                </Typography>
                <Typography gutterBottom variant="body1" align="center">
                    Love the show? Don't miss an episode. Subscribe for free updates & unlimited extra content.
                </Typography>
                <iframe className={clsx(classes.audioPlayer,classes.centerDiv, classes.topPad24)} title="Episode 1. (Book One)" allowtransparency="true" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=d5nfh-1044f6e-pb&from=embed&share=1&download=1&skin=666666&btn-skin=c73a3a&size=240"></iframe>
            </div>
            <div className={clsx(classes.liteGrayBG, classes.btmPad50)}>
                <Typography variant="h4" align="center" className={clsx(classes.topPad50, classes.centerText, classes.pad24)}>
                    Love the show? Don't miss an episode. Subscribe for updates & more!
                </Typography>
                <div className={clsx(classes.topPad50, classes.centerText, classes.flex)}>
                    <TextField label="Enter email to subscribe!" InputProps={{className: classes.whiteBG}} className={clsx(classes.emailSignUp)} />
                    <Box sx={{ml: 4}}>
                        <Button className={clsx(classes.subBtn)} color="primary" variant="contained">Subscribe</Button>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;