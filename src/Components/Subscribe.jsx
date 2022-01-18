import React from 'react';
import SubscribeForm from './SubscribeForm';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import useStyles from './styles';

let responsiveTheme = createTheme();
responsiveTheme = responsiveFontSizes(responsiveTheme);

const Subscribe = () => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.topPad50, classes.btmPad50)}>
            <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            >    
                <Grid item sx={{width: '80%'}}>
                    <SubscribeForm />
                </Grid>  
                <Grid item lg={1} xs={1} sx={{width: '80%'}} className={classes.topPad50}>
                    <Typography gutterBottom variant='h5' align='center'>Thank you for listening :)</Typography>
                    <Typography fullWidth variant='body1' align='center'>Sign up above & receive an automated email whenever a new episode is up.... as well as unlimited access to extra free content like The NeverSeas, guided meditations and more.</Typography>
                </Grid>  
                <Grid item xs={12} style={{minHeight: '25vh'}}></Grid>
            </Grid>
        </div>
    )
}

export default Subscribe;