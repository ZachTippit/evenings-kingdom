import React from 'react'
import { Card, Grid, Typography, TextField, Button } from '@mui/material';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import useStyles from './styles';

const SignInBox = ({passwordCheck}) => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const password = data;
        passwordCheck(password);
    }
    const onError = (errors, e) => console.log(errors, e);

    return (
        <Card>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.centerText, classes.centerDiv, classes.width70)}>
                <Typography variant="h6">Enter password for access to lovely extra goodies :)</Typography>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Grid container
                    justifyContent="center"
                    spacing={3} p={2}>
                    <Grid item xs={12} lg={12}>
                        <TextField fullWidth label="Enter password for lovely goodies :)" {...register('password')} InputProps={{className: classes.whiteBG}} className={clsx(classes.emailSignUp)} />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Button fullWidth type='submit' className={clsx(classes.subBtn)} color="primary" variant="contained">Submit</Button>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Card>
    )
}

export default SignInBox
