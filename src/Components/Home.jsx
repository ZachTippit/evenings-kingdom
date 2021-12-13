import React from 'react';
import EKTitle from '../img/ek-blk-alpha.png';
import EmailOnlySubscribeForm from './EmailOnlySubscribeForm';
import { Typography, Link } from '@mui/material';
import clsx from 'clsx';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';

import useStyles from './styles';


let responsiveTheme = createTheme();
responsiveTheme = responsiveFontSizes(responsiveTheme);

const Home = () => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);

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
                    New to EK? Listen to the trailer below!
                </Typography>
                <Typography gutterBottom variant="body1" align="center">
                    Love the show? Don't miss an episode. <Link href='./subscribe'>Subscribe for free updates & unlimited extra content.</Link>
                </Typography>
                <iframe className={clsx(classes.audioPlayer,classes.centerDiv, classes.topPad24)} title="Evening's Kingdom Trailer" allowtransparency="true" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?from=embed&i=gnb72-10ccd5d-pb&square=1&share=1&download=1&skin=f6f6f6&btn-skin=8bbb4e&size=240"></iframe>
            </div>
            <EmailOnlySubscribeForm />
        </div>
    )
}

export default Home;