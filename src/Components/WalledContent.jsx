import React from 'react'
import AudioPlayer from './Listen/AudioPlayer'
import NeverseasAudio from '../audio/neverseas.mp3';
import ReactAudioPlayer from 'react-audio-player';
import { Typography, Link } from '@mui/material';
import clsx from 'clsx';

import useStyles from './styles';

const Neverseas = {
    title: 'The Neverseas',
    description: 'Written & Read by Paula Schmidt'
}

const WalledContent = () => {
    const classes = useStyles();

    return (
        <div style={{minHeight: '75vh', backgroundColor: 'black', color: 'white'}} className={clsx(classes.centerDiv, classes.topPad50, classes.btmPad50, classes.width70)}>
            <div className={classes.topPad50}>
                <Typography gutterBottom align="center" variant="h3">Welcome, friends, and thank you for listening.</Typography>
                <Typography align="center" variant="h5">And since you made it here, thank you for subscribing :)</Typography>
            </div>
            <div className={classes.topPad50}>
                <AudioPlayer title={Neverseas.title} description={Neverseas.description} source={NeverseasAudio} />
                <Typography variant="body1" align="center" sx={{pt: 3}}>The eerie, obsessive attraction between a restless young woman and a dangerous traveler tips into madness... and revenge.<br/><br/>Gothic atmosphere, check. NSFW - check check :)<br/><br/>One request, dear listeners - <i><b>please do not share this content with anyone.</b></i> In order for it to qualify for a certain, top secret, upcoming endeavor, the story can't be widely available, or it's disqualified. So for at least the next few months, it needs to be just for you guys. That said, if you know some people who you think might enjoy it, <Link href='./subscribe'><b>please strongly encourage them to subscribe and they'll also receive the private link.</b></Link><br/><br/>Happy Hallow's eve listens, my dears. I do believe Poe would approve of your activity. Please enjoy :)</Typography>
            </div>            
        </div>
    )
}

export default WalledContent