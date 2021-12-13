import React from 'react';
import SubscribeForm from './SubscribeForm';
import { Grid } from '@mui/material';
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
            spacing={30}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '95vh' }}>
                <Grid item lg={1} xs={1} sx={{width: '80%'}}>
                    <div className={classes.centerDiv}>
                        <SubscribeForm />
                    </div>
                </Grid>      
            </Grid>
           
        </div>
    )
}

export default Subscribe;