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
            spacing={30}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '95vh' }}>
                <Grid item lg={1} xs={1} sx={{width: '80%'}}>
                    <div className={classes.centerDiv}>
                        <SignInBox />
                    </div>
                </Grid>   
                <Grid item lg={1} xs={1} sx={{width: '80%'}}>
                    <Typography align="center" variant='h4'>Want to join?</Typography>
                    <Typography variant="body1" align="center" className={classes.centerText}>
                        Jump into our subscriber list and receive unlimited access to free extra content.
                    </Typography>
                    <div className={clsx(classes.topPad50, classes.centerText, classes.flex)}>
                        <TextField label="Enter email to subscribe!" className={clsx(classes.emailSignUp)} />
                        <Box sx={{ml: 4}}>
                            <Button className={clsx(classes.subBtn)} color="primary" variant="contained">Subscribe</Button>
                        </Box>
                    </div>
                </Grid>   
            </Grid>
           
        </div>
    )
}

export default Extra
