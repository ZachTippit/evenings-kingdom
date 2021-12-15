import React, {useState} from 'react'
import { Typography, TextField, Grid, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { addSubscriber } from '../lib/email.js';

import useStyles from './styles';

const SubscribeForm = () => {
    const classes = useStyles();

    const { register, handleSubmit } = useForm();
    const [ isRegistered, setIsRegistered ] = useState(false);

    const onSubmit = async (data, e) => {
        setIsRegistered(await addSubscriber(data));
    }

    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.centerDiv)}>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography fullWidth gutterBottom align='center' variant='h4'>Share your EK story with us</Typography>
                            <Typography fullWidth gutterBottom align='center' variant='body2'>Tell us about your journey through Evening's Kingdom. And don't forget to check your email for a special treat!</Typography>
                            {isRegistered ? <Typography variant='body1' align='center'><b>Thank you for subscribing! Check your email for details.</b></Typography> : null}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField required {...register('firstName')} fullWidth label="First Name" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField {...register('lastName')} fullWidth label="Last Name" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required {...register('email')} fullWidth label="Email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField {...register('comment')} fullWidth label="Comments (optional, but heartily encouraged!)" />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox {...register('subscribe')} defaultChecked />} label="Subscribe for future EK updates, extra goodies and lovely vibes straight to your inbox <3" />
                            </FormGroup>
                        </Grid> */}
                        <Grid item xs={12}>
                            <Button fullWidth type="submit" variant="contained">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    )
}

export default SubscribeForm
