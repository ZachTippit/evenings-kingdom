import React from 'react'
import Episode from './Listen/Episode'
import EK_BW from '../img/ek-bw.png';
import { Typography, Link } from '@mui/material';
import clsx from 'clsx';

import useStyles from './styles';

const interviews = [
    {
        epNum: 1,
        title: 'Time May Change Me w/ Katherine Forier: Part One',
        interview: 'Interview Description',
        description: 'On writing, wellness, and confessions about my past... including my 17th summer,  when I ran away to the woods and lived very happily out of my Jeep on library books, homemade hardtack and food I fished up out of … dumpsters…',
        link: 'https://anchor.fm/katherine-forier/embed/episodes/Paula-Schmidt---Part-One----On-Professional-Writing--School-Buses--Finding-your-way-e19vam0/a-a6ru82t'
    },
    {
        epNum: 2,
        title: 'Time May Change Me w/ Katherine Forier: Part Two',
        interview: 'Interview Description',
        description: 'This episode is my favorite. We go deeper into the writing process, the world of Evenings Kingdom, and get real about how difficult any long-term, independent endeavor can be on marriage and friendships - and how those difficulties can help us to grow. Also, a fun segue on Tantric practices :)',
        link: 'https://anchor.fm/katherine-forier/embed/episodes/Paula-Schmidt---Part-Two----The-writing-process--boundaries--and-friendships-e1ab6nc/a-a6thrce'
    }
]

const WalledContent = () => {
    const classes = useStyles();

    return (
        <div style={{minHeight: '75vh'}} className={clsx(classes.centerDiv, classes.topPad50, classes.btmPad50, classes.width70)}>
            <div className={classes.topPad50}>
                <Typography gutterBottom align="center" variant="h3">Welcome, friends, and thank you for listening.</Typography>
                <Typography align="center" variant="h5">And since you made it here, thank you for subscribing :)</Typography>
            </div>
            <div className={classes.topPad50}>
                <Typography variant="h5" align="center"><b>The Neverseas</b><br/>Written & Read by Paula Schmidt</Typography>
                <Typography variant="body2" align="center" sx={{pt: 3}}><b>Audio clip coming soon!</b></Typography>
                <Typography variant="body1" align="center" sx={{pt: 3}}>The eerie, obsessive attraction between a restless young woman and a dangerous traveler tips into madness... and revenge.<br/><br/>Gothic atmosphere, check. NSFW - check check :)<br/><br/>One request, dear listeners - <i><b>please do not share this content with anyone.</b></i> In order for it to qualify for a certain, top secret, upcoming endeavor, the story can't be widely available, or it's disqualified. So for at least the next few months, it needs to be just for you guys. That said, if you know some people who you think might enjoy it, <Link href='./subscribe'><b>please strongly encourage them to subscribe and they'll also receive the private link.</b></Link><br/><br/>Happy Hallow's eve listens, my dears. I do believe Poe would approve of your activity. Please enjoy :)</Typography>
            </div>            
        </div>
    )
}

export default WalledContent