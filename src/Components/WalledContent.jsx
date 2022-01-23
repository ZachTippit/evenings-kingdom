import React from 'react'
import AudioPlayer from './Listen/AudioPlayer'
import NeverseasAudio from '../audio/neverseas.mp3';
import { Grid, Typography, Divider } from '@mui/material';

import useStyles from './styles';

const Neverseas = {
    title: 'The Neverseas',
    description: 'Written & Read by Paula Schmidt'
}

const WalledContent = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} sx={{minHeight: '90vh', backgroundColor: 'black', color: 'white', justifyContent: 'center'}}>
            <Grid item xs={12} md={8} sx={{mr: 4, ml: 4, mt: 8}}>
                <Typography gutterBottom align="center" variant="h3">Welcome, friends,</Typography>
                <Typography gutterBottom variant='h5' align='center'>thank you for listening.</Typography>
                <Typography align="center" variant="body2">And since you made it here, thank you for subscribing :)</Typography>
            </Grid>
            <Grid item xs={12} md={8} sx={{mr: 4, ml: 4}}>
                <AudioPlayer title={Neverseas.title} description={Neverseas.description} source={NeverseasAudio} />
                <Typography variant="body1" align="center" sx={{pt: 3}}><i>“The night I met Death, he thought he was just passing through…”</i></Typography>
                <Typography variant="body1" align="center" sx={{pt: 3}}>The eerie, obsessive attraction between a restless young woman and a dangerous traveler tips into madness... and revenge.</Typography>
                <Divider variant='middle' color='white' style={{width: '60%', margin: 'auto', marginTop: '2rem'}}/>
            </Grid>
            <Grid item xs={12} md={8} sx={{m: 4}}>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>
One request, dear listeners - please do not share this content with anyone. In order for it to qualify for a certain, top secret, upcoming endeavor, the story can't be widely available, or it's disqualified. So for at least the next few months, it needs to be just for you guys. That said, if you know some people who you think might enjoy it, please strongly encourage them to subscribe and they'll also receive the private link.</Typography>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2, pt: 3}}>Happy listening, my dears. I do believe E. E. Poe would approve of your activity. Please enjoy :)</Typography>
            </Grid>
        </Grid>
    )
}

export default WalledContent