import React from 'react'
import { Typography, Box, Button, TextField, Grid } from '@mui/material';
import clsx from 'clsx';
import SignInBox from './SignInBox'

import useStyles from './styles';


const Extra = () => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.topPad50, classes.btmPad50)}>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '65vh' }}>
                <Grid item lg={1} xs={1} sx={{width: '60%'}}>
                    <div className={classes.centerDiv}>
                        <SignInBox />
                    </div>
                </Grid>   
            </Grid>
            <Typography align="center" variant='h4'>Get a free password to more content by subscribing!</Typography>
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
    )
}

export default Extra
