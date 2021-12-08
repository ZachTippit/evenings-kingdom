import React from 'react'
import { Card, Typography, Box, TextField, Button } from '@mui/material';
import clsx from 'clsx';

import useStyles from './styles';

const SignInBox = () => {
    const classes = useStyles();

    return (
        <Card>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.centerText, classes.centerDiv)}>
                <Typography variant="h6">Enter password for lovely goodies :)</Typography>
                <div className={clsx(classes.flex, classes.topPad50)}>
                    <TextField label="Password" className={clsx(classes.emailSignUp)} />
                    <Box sx={{ml: 4}}>
                        <Button className={clsx(classes.subBtn)} color="primary" variant="contained">Submit</Button>
                    </Box>
                </div>
            </div>
        </Card>
    )
}

export default SignInBox
