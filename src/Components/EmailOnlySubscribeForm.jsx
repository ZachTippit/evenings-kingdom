import React, { useState, useEffect } from 'react'
import { Typography, Grid, TextField, Button } from '@mui/material';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { addSubscriber, subscriberCount } from '../lib/email.js';

import useStyles from './styles'

const EmailOnlySubscribeForm = () => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const [subCount, setSubCount] = useState('a lot of');
    const onError = (errors, e) => console.log(errors, e);

    const [ isRegistered, setIsRegistered ] = useState(false);

    const onSubmit = async (data, e) => {
        setIsRegistered(await addSubscriber(data));
    }

    useEffect( async() => {
        let SUB_COUNT = await subscriberCount();
        setSubCount(SUB_COUNT);
    }, [])

    return (
    <div className={clsx(classes.liteGrayBG, classes.btmPad50)}>
        <Typography variant="h4" align="center" className={clsx(classes.topPad50, classes.centerText, classes.pad24)}>
            Love the show? Subscribe and never miss an episode.
        </Typography>
        <div className={clsx(classes.topPad50, classes.flex)}>
            <form className={classes.width70} onSubmit={handleSubmit(onSubmit, onError)}>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch" spacing={4} p={2}>
                    {isRegistered ? <Typography variant='body1' align='center'><b>Thank you for subscribing! Check your email for details.</b></Typography> : null}
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




