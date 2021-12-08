import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Box, Button } from '@mui/material';
import clsx from 'clsx';
import EKTitle from '../img/ek-blk-alpha.png';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.home, classes.whiteBG)}>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.liteGrayBG)}>
                <Typography variant="h5" align="center">
                    On their epic quest for revenge, unlikely friends journey across an ancient, magical world...
                </Typography>
                <img src={EKTitle} alt="Title" className={clsx(classes.topPad50, classes.EKTitle)} />
                <Typography variant="body1" align="center">
                    WRITTEN AND READ BY PAULA SCHMIDT
                </Typography>
            </div>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.splashText)}>
                <Typography variant="h4" align="center" className={clsx(classes.topPad50)}>
                    New to EK? Listen to the first episode below!
                </Typography>
                <Typography variant="body1" align="center" className={clsx(classes.btmPad50)}>
                    Audio recordings can also be found on your favorite podcast service ☺️ (Apple Music and Spotify)
                </Typography>
                <iframe className={clsx(classes.audioPlayer,classes.centerDiv)} title="Evening's Kingdom" allowtransparency="true" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=efa82-b3dcd8-pbblog-playlist&share=1&download=1&skin=666666&btn-skin=c73a3a&size=240" allowfullscreen=""></iframe>
            </div>
            <div className={clsx(classes.liteGrayBG, classes.btmPad50)}>
                <Typography variant="h4" align="center" className={clsx(classes.topPad50, classes.centerText)}>
                    Love the show? Don't miss an episode. Subscribe for updates & more!
                </Typography>
                <Typography variant="body1" align="center" className={classes.centerText}>
                    Email subscribers also receive exclusive Evening's Kingdom stories and guided meditations led by the author, Paula Schmidt.
                </Typography>
                <div className={clsx(classes.topPad50, classes.centerText, classes.flex)}>
                    <TextField label="Enter email to subscribe!" className={clsx(classes.emailSignUp)} />
                    <Box sx={{ml: 4}}>
                        <Button className={clsx(classes.subBtn)} color="primary" variant="contained">Subscribe</Button>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Home;