import React from 'react'
import { Typography, Grid, TextField, Button } from '@mui/material';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import useStyles from './styles'

const EmailOnlySubscribeForm = () => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);


    return (
    <div className={clsx(classes.liteGrayBG, classes.btmPad50)}>
        <Typography variant="h4" align="center" className={clsx(classes.topPad50, classes.centerText, classes.pad24)}>
            Love the show? Don't miss an episode. Subscribe for updates & more!
        </Typography>
        <div className={clsx(classes.topPad50, classes.flex)}>
            <form className={classes.width70} onSubmit={handleSubmit(onSubmit, onError)}>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch" spacing={4} p={2}>
                    <Grid item xs={12} lg={8}>
                        <TextField fullWidth label="Enter email to subscribe!" {...register('email')} InputProps={{className: classes.whiteBG}} className={clsx(classes.emailSignUp)} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Button fullWidth type='submit' className={clsx(classes.subBtn)} color="primary" variant="contained">Subscribe</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    </div>
    )
}

export default EmailOnlySubscribeForm




