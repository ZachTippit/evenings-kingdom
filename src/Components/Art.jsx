import React from 'react'
import Episode from './Listen/Episode'
import EK_BW from '../img/ek-bw.png';
import { Typography, Link } from '@mui/material';
import AudioPlayer from './Listen/AudioPlayer'
import Vargas11 from '../audio/vargas1-1.mp3';
import Meditation1 from '../audio/meditation1.mp3';
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

const Art = () => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.centerDiv, classes.topPad50, classes.btmPad50)}>
            <div className={clsx(classes.topPad50, classes.width70, classes.centerDiv)}>
                <Typography gutterBottom align="center" variant="h3">Can't get enough of Evening's Kingdom?</Typography>
                <Typography align="center" variant="h5">Here is some more content for you to enjoy!</Typography>
            </div>
            <div className={clsx(classes.topPad50, classes.width70, classes.centerDiv)}>
                <Typography gutterBottom align="center" variant="h4">Readings</Typography>
                <Typography variant="body1" align="center"><b>Evening's Kingdom, Chapter One</b><br/> Translated & Read en español, ​by the supremely talented <Link href='https://arts-sciences.buffalo.edu/romance-languages-literatures/faculty/departmental-faculty/margarita-vargas.html'><b>Margarita Vargas</b></Link>,<br />Associate Professor of Romance Languages & Literature, University of Buffalo.</Typography>
                <AudioPlayer source={Vargas11} />
            </div>
            <div className={clsx(classes.topPad50, classes.liteGrayBG, classes.centerDiv)}>
                <div className={clsx(classes.btmPad50, classes.width70, classes.centerDiv)}>
                    <Typography gutterBottom align="center" variant="h4">Interviews</Typography>
                    <Typography gutterBottom align='center' variant="body1">My (first-ever!) interview, with the lovely Katherine Forier of <Link href='https://anchor.fm/katherine-forier/episodes/Paula-Schmidt---Part-One----On-Professional-Writing--School-Buses--Finding-your-way-e19vam0'><b>Time May Change Me</b></Link>. Please share and enjoy!</Typography>
                    <Typography gutterBottom align='center' variant='body2' className={classes.btmPad50}>You can also listen via <Link href='https://open.spotify.com/show/03d5nAKHWVTyatbpngcmTm'><b>Spotify</b></Link> & <Link href='https://podcasts.apple.com/us/podcast/time-may-change-me/id1560791534'><b>Apple Music</b></Link></Typography>
                    <Episode style={{backgroundColor: 'inherit'}} episode={interviews[0]}/>
                    <Episode style={{backgroundColor: 'inherit'}} episode={interviews[1]}/>
                </div>
                
            </div>
            <div className={classes.topPad50}>
                <Typography gutterBottom align="center" variant="h4">Meditations</Typography>
                <AudioPlayer title={'Guided Meditation'} description={'This meditation is for healing, and celebrating the passage of time. May it bring you calm.'} source={Meditation1} />
                <Typography align="center" variant="body2">More meditations coming soon. ​Have a request? <Link href='./subscribe'><b>Please drop me a line here.</b></Link></Typography>
            </div>
            
            <img src={EK_BW} alt="Evening's Kingdom Logo" className={clsx(classes.fanArtLogo, classes.topPad50)} />
        </div>
    )
}

export default Art