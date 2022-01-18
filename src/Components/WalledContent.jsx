import React from 'react'
import AudioPlayer from './Listen/AudioPlayer'
import NeverseasAudio from '../audio/neverseas.mp3';
import ReactAudioPlayer from 'react-audio-player';
import { Grid, Typography, Link } from '@mui/material';
import clsx from 'clsx';

import useStyles from './styles';

const Neverseas = {
    title: 'The Neverseas',
    description: 'Written & Read by Paula Schmidt'
}

const WalledContent = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} direction='column' sx={{minHeight: '90vh', backgroundColor: 'black', color: 'white'}}>
            <Grid item xs={12} md={6} sx={{mr: 4, ml: 4, mt: 8}}>
                <Typography gutterBottom align="center" variant="h3">Welcome, friends,</Typography>
                <Typography gutterBottom variant='h5' align='center'>thank you for listening.</Typography>
                <Typography align="center" variant="body2">And since you made it here, thank you for subscribing :)</Typography>
            </Grid>
            <Grid item xs={12} xs={12} md={6} sx={{mr: 4, ml: 4}}>
                <AudioPlayer title={Neverseas.title} description={Neverseas.description} source={NeverseasAudio} />
                <Typography variant="body1" align="center" sx={{pt: 3}}>The eerie, obsessive attraction between a restless young woman and a dangerous traveler tips into madness... and revenge.</Typography>
                <Typography variant="body1" align="center" sx={{pt: 3}}>“The night I met Death, he thought he was just passing through…”</Typography>
            </Grid>
            <Grid item xs={12} xs={12} md={6} sx={{m: 4}}>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>
One request, dear listeners - please do not share this content with anyone. In order for it to qualify for a certain, top secret, upcoming endeavor, the story can't be widely available, or it's disqualified. So for at least the next few months, it needs to be just for you guys. That said, if you know some people who you think might enjoy it, please strongly encourage them to subscribe and they'll also receive the private link.</Typography>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>Growing up in Lawrence, Kansas, I often dreamt about holing up at <Link href='https://www.thesavoykc.com/about/' sx={{color: 'white', textDecoration: 'underline'}}>the glamorous old Savoy Hotel</Link> in downtown Kansas City to write a novel someday. Dark walls and ice tinkling in drinks; worn red carpets. Harry Truman often ate his boiled eggs there, in his favorite creaky-green leather booth. </Typography>
            </Grid>
        </Grid>
    )
}

export default WalledContent