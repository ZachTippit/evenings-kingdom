import React from 'react'
import { Typography, TextField, Grid, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import useStyles from './styles';

const SubscribeForm = () => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.centerDiv)}>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography fullWidth gutterBottom align='center' variant='h4'>Share your EK story with us!</Typography>
                            <Typography fullWidth align='justify' variant='body2'>We want to hear about your journey through Evening's Kingdom and provide updates along both Ouma's and my own :)</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField {...register('name')} fullWidth label="Name" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField {...register('email')} fullWidth label="Email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField {...register('comments')} fullWidth label="Comments (optional, but heartily encouraged!)" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox {...register('subscribe')} defaultChecked />} label="Subscribe for future EK updates, extra goodies and lovely vibes straight to your inbox <3" />
                            </FormGroup>
                        </Grid>
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
