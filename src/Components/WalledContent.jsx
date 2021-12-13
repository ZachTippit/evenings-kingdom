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
        <div className={clsx(classes.centerDiv, classes.topPad50, classes.btmPad50, classes.width70)}>
            <div className={classes.topPad50}>
                <Typography gutterBottom align="center" variant="h2">Can't get enough of Evening's Kingdom?</Typography>
                <Typography align="center" variant="h5">Here is some more content for you to enjoy!</Typography>
            </div>
            <img src={EK_BW} alt="Evening's Kingdom Logo" className={clsx(classes.fanArtLogo)} />
            <div className={classes.topPad50}>
                <Typography gutterBottom variant="h3">Readings</Typography>
                <Typography variant="body1" align="center">Evening's Kingdom, Chapter One<br/> Translated & Read en español, ​by the supremely talented <Link href='https://arts-sciences.buffalo.edu/romance-languages-literatures/faculty/departmental-faculty/margarita-vargas.html'>Margarita Vargas</Link>,<br />Associate Professor of Romance Languages & Literature, University of Buffalo.</Typography>
                <Typography variant="body2" align="center" sx={{pt: 3}}>Audio clip coming soon!</Typography>
            </div>
            <div className={classes.topPad50}>
                <Typography gutterBottom variant="h3">Interviews</Typography>
                <Typography variant="body1">My very first interview with Katherine Forier on her podcast, Time May Change Me. Check out her podcast on Anchor.fm, Spotify and Apple Music!</Typography>
                <Episode episode={interviews[0]}/>
                <Episode episode={interviews[1]}/>
            </div>
            <Typography gutterBottom variant="h3">Meditations</Typography>
            <Typography variant="body1">Coming soon...</Typography>
        </div>
    )
}

export default WalledContent