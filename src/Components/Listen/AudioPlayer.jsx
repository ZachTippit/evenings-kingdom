import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';

import useStyles from '../styles'

const AudioPlayer = ({title, description, source}) => {
    const classes = useStyles();

    return (
        <div className={classes.topPad50}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography gutterBottom variant='h5' align='center'><b>{title}</b></Typography>
                    <Typography variant='body1' align='center'>{description}</Typography>
                </Grid>
                <Grid item xs={12} className={clsx(classes.topPad24, classes.btmPad50)}>
                    <ReactAudioPlayer src={source} controls controlsList="nodownload" className={classes.centerDiv}/>
                </Grid>
            </Grid>
            
        </div>
      );
}

export default AudioPlayer;