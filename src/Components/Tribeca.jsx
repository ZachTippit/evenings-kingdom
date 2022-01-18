import React from 'react'
import AudioPlayer from './Listen/AudioPlayer'
import NeverseasAudio from '../audio/neverseas.mp3';
import ReactAudioPlayer from 'react-audio-player';
import { Typography, Grid, Link, Divider } from '@mui/material';
import clsx from 'clsx';

import useStyles from './styles';

const Neverseas = {
    title: 'The Neverseas',
    description: 'Written & Read by Paula Schmidt'
}

const Tribeca = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} direction='column' sx={{minHeight: '90vh', backgroundColor: 'black', color: 'white'}}>
            <Grid item xs={12} md={6} sx={{mt: 8, p: 2}}>
                <Typography gutterBottom align="center" variant="h3">Welcome, Tribeca Screeners,</Typography>
                <Typography variant='h6' align='center'>and thank you for listening.</Typography>
            </Grid>
            <Grid item xs={12} xs={12} md={6} sx={{mr: 4, ml: 4}}>
                <AudioPlayer title={Neverseas.title} description={Neverseas.description} source={NeverseasAudio} />
                <Typography variant="body1" align="center" sx={{pt: 3}}>The eerie, obsessive attraction between a restless young woman and a dangerous traveler tips into madness... and revenge.</Typography>
                <Typography variant="body1" align="center" sx={{pt: 3}}>“The night I met Death, he thought he was just passing through…”</Typography>
            </Grid>
            <Grid item xs={12} xs={12} md={6} sx={{m: 4}}>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>I wrote The NeverSeas during a spell of deliciously stormy mornings, nostalgic for a lovely, lonely old hotel I once knew as a girl.</Typography>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>Growing up in Lawrence, Kansas, I often dreamt about holing up at <Link href='https://www.thesavoykc.com/about/' sx={{color: 'white', textDecoration: 'underline'}}>the glamorous old Savoy Hotel</Link> in downtown Kansas City to write a novel someday. Dark walls and ice tinkling in drinks; worn red carpets. Harry Truman often ate his boiled eggs there, in his favorite creaky-green leather booth. </Typography>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>On special occasions when we were growing up, dad took us for lobster bisque and shrimp cocktails. I loved it intensely. </Typography>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>The Savoy burned down, but for a little while after college, I bartended on the Kansas City plaza, and loved it. Like Ainsley in the story, I had regulars from all over the world, and looked forward to continuing conversations with many of them week to week.</Typography>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>I held these places in mind as I wrote, along with the gorgeous bar <Link href='https://www.nytimes.com/2017/02/02/t-magazine/giacomo-bulleri-restaurant-studio-peregalli.html' sx={{color: 'white', textDecoration: 'underline'}}>in this NYT article</Link>... cordyceps fungus (oh yes, THAT fungus)... and winter storms.</Typography>
                <Typography gutterBottom variant='body1' align='left' sx={{pl: 2}}>Thank you so much for listening. Please enjoy!</Typography>
            </Grid>
        </Grid>
        // <div style={{minHeight: '75vh', backgroundColor: 'black', color: 'white'}} className={clsx(classes.centerDiv, classes.topPad50, classes.btmPad50, classes.width70)}>
        //     <div className={classes.topPad50}>
                
        //     </div>
        //     <div>
                
        //     </div>            
        // </div>
    )
}

export default Tribeca