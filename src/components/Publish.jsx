import React from 'react'
import EKRust from '../img/ek-rust.png';
import { Typography, Link } from '@mui/material';
import clsx from 'clsx';

import useStyles from './styles';

const Publish = () => {
    const classes = useStyles();

    return(
        <div className={clsx(classes.topPad50, classes.width70, classes.centerDiv)}>
            <div className={classes.btmPad50}>
                <Typography gutterBottom align='center' variant='h4'>My friends, I need your help :)</Typography>
                <Typography align='center' variant='h6' sx={{pb: 5}}>Help Evening's Kingdom get published!</Typography>
                <Typography gutterBottom variant='body1' sx={{pb: 2}}><b>1. Please tell your fantasy-loving friends about the story.</b> Share the 'Listen' page with them, and if you'd like, you can also use the share-able at the bottom of this page on your own channels.</Typography>
                <Typography gutterBottom variant='body1' sx={{pb: 2}}><b>2. Create a five-star review for Evenings Kingdom on <Link href='https://podcasts.apple.com/us/podcast/evenings-kingdom/id1576237202'>Apple Podcasts</Link>.</b> Just subscribe & then scroll down; click 5 stars. Any words you're moved to share will have me dancing for joy! Once I have five star reviews from... well, at least the population of a small village, tbh... I can reach out to agents with proof that people are enjoying the story and would want to see it in print.</Typography>
                <Typography gutterBottom variant='body1' sx={{pb: 2}}><b>3. Beam some love my way!</b> My costs to keep the lights on at Evenings Kingdom run about $100 monthly. Donations help out so much. You can send me love directly via <b>Venmo at Paula-Schmidt-9</b>, or <Link href='https://www.buymeacoffee.com/eveningskingdom'>Buy Me A Coffee</Link>, by clicking the yellow button below.<br/><br/>With Buy Me a Coffee, you have the option to send a monthly donation with their Membership option, or a one-time donation via their Support option. Every single bit helps hold space for the world of Evenings Kingdom to flower & grow. Thank you!!</Typography>
                <Typography gutterBottom variant='body1' sx={{pb: 2}}><b>4. Know a literary agent who loves fantasy??</b> (!) Please let them know how much you’re enjoying the story.</Typography>
                <Typography gutterBottom variant='body1' sx={{pb: 2}}><b>5. Have an idea to help listeners to find the show?</b> Happen to have a getaway cabin you'd loan a novelist? Hiiiii... please reach out, I'd love to hear from you.<Link href='https://www.instagram.com/eveningskingdom/'>Drop me a line here.</Link></Typography>
            </div>
            <div className={classes.topPad50, classes.width70, classes.centerDiv, classes.btmPad50}>
                <Typography align='center' variant='h6' sx={{pb: 2}}>What happens next?</Typography>
                <Typography gutterBottom variant='body1' sx={{pb: 2}}>While I write Book 3 of Evening's Kingdom, I’m recording all 600 pages of Books 1 and 2 to share with you here.</Typography>
                <Typography gutterBottom variant='body1' sx={{pb: 2}}>This will be a four to six book series. With the help of a literary agent, I'd love to publish all the books traditionally, and to collaborate with others to explore all sorts of iterations of Evening's Kingdom. In the meantime, friend, thank you so much for listening.
​Please subscribe, review & stay tuned; the rest of the story is just down the road.</Typography>
                <img src={EKRust} alt="Evening's Kingdom Sticker" className={clsx(classes.topPad50, classes.EKRust)} />
            </div>
        </div>
    )
}

export default Publish;