import React from 'react';
import Episode from './Episode'
import EmailOnlySubscribeForm from '../EmailOnlySubscribeForm'
import { Typography, Link } from '@mui/material'
import clsx from 'clsx';
import useStyles from '../styles';

const episodes = [
    {
        epNum: '1',
        title: 'Book 1: Episode 1',
        description: "This is an epic quest across an ancient, magical kingdom … as Ouma, a reluctant young shaman seeks her revenge against the king who killed her family. But, guided by her otherworldly allies and unlikely new friends, Ouma unlocks a whole new world.",
        link: 'https://www.podbean.com/player-v2/?i=d5nfh-1044f6e-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    },
    {
        epNum: '2',
        title: 'Book 1: Episode 2',
        description: "As Yang soldiers furiously pursue Ouma, the young girl makes her escape - and is given a magical, unexpected gift.Talu makes a secret ally, and Ogodei makes a deal.",
        link: 'https://www.podbean.com/player-v2/?i=2c69s-1054f99-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    },
    {
        epNum: '3',
        title: 'Book 1: Episode 3',
        description: "As Ouma flees with the Chiriklo caravan into the ancient desert kingdom of Tensingland, tension only deepens between she and Ogodei. And we meet Nor Tensing, the small but determined boy prince who must eliminate and outlast his rivals to the throne - but his beloved Nejmi may be his greatest threat of all.",
        link: 'https://www.podbean.com/player-v2/?i=5as6g-1095106-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    },
    {
        epNum: '4',
        title: 'Book 1: Episode 4',
        description: "After rescuing a stranded traveler, Ouma and Talu have a fraught encounter at a trading ground. Nor and Nejmi face the consequences when one of their father's harem makes a bid for freedom.",
        link: 'https://www.podbean.com/player-v2/?i=ssfmj-109e6a5-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    },
    {
        epNum: '5',
        title: 'Book 1: Episode 5',
        description: "Harem violence escalates in the palace as Nor & Nejmi fall more deeply in love - but the princess has her own designs. Meanwhile, the Chiriklo caravan reaches the Well of Skulls, a haunted desert village famous for its exalting smoke baths, and Oriaku, Ouma and Talu cannot resist...",
        link: 'https://www.podbean.com/player-v2/?i=2gmyd-10a75f8-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    },
    {
        epNum: '6',
        title: 'Book 1: Episode 6',
        description: "An erotic encounter between Nor and Nejmi in the grotto beneath the palace changes the course of the kingdom. At the Well of Skulls, Oriaku has a powerful encounter of his own, while Ouma journeys with the ghost of an ancient Wutar shaman into the past, and her most painful truth...",
        link: 'https://www.podbean.com/player-v2/?i=mwfcr-10b02a3-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    },
    {
        epNum: '7',
        title: 'Book 1: Episode 7',
        description: "As a royal execution incites riots, Nor races through the jungle alone to save his beloved Nejmi.The Chiriklo caravan stumbles onto the ancient, lost city of Andohar... attracting an unwelcome guest.",
        link: 'https://www.podbean.com/player-v2/?i=ew4me-10c2259-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    },
    {
        epNum: '8',
        title: 'Book 1: Episode 8',
        description: "In a searing twist of fortune, Nor and Nejmi's paths divide across unbridgeable kingdoms. As Ogodei recruits Chiriklo to retake their homeland on the coast, Fern discovers a family of wild catlings... with devastating consequences.",
        link: 'https://www.podbean.com/player-v2/?i=zy6xz-10d4606-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    },
    {
        epNum: '9',
        title: 'Book 1: Episode 9',
        description: "\"Just as wild plants have the strongest medicine, so do the wildest gods.\" - Evening's KingdomOuma, Oriaku and Talu journey into the mountains to trade with the famously reclusive monks of the Cloud Forest. For the first time, we glimpse our mysterious narrator... but when a powerful, mysterious god appears to Ouma, she apprentices herself to his dark ideals to learn how to destroy the Yang.Meanwhile, stationed at the decadent outpost of his mother's native Palmstone, Nor's military insight grows... as do his Yang followers.",
        link: 'https://www.podbean.com/player-v2/?i=8nwqi-10e69e6-pb&from=embed&share=1&download=1&skin=1b1b1b&btn-skin=c73a3a&size=240'
    }
]

const Listen = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={clsx(classes.topPad50, classes.btmPad50, classes.splashText, classes.pad24, classes.listenHeader)}>
                <Typography gutterBottom variant="h4" align="center">
                    Begin your journey into Evening's Kingdom...
                </Typography>
                <Typography variant="body1" align="center">
                    And don't miss an episode! Click <Link href='./subscribe'>here</Link> to sign up for automatic updates, free access to more stories & extra content.
                </Typography>
            </div>
            <div className={classes.listen}>
                {episodes.map((episode) => (
                    <Episode episode={episode} />
                ))}
            </div>
            <div className={clsx(classes.liteGrayBG, classes.btmPad50, classes.listenFooter)}>
                <EmailOnlySubscribeForm />
                <Typography gutterBottom variant="h4" align="center" className={clsx(classes.centerText, classes.pad24)}>
                    Also available via <Link href='https://open.spotify.com/show/0hXaV3QB6z003yxnc2Efsk'>Spotify</Link> and <Link href='https://podcasts.apple.com/us/podcast/evenings-kingdom/id1576237202'>Apple Music</Link>
                </Typography>
                <Typography variant="h6" align="center" className={clsx(classes.centerText, classes.pad24)}>
                    Stay tuned folks... Book Two is just down the road 🛣️
                </Typography>
            </div>
        </div>
        
    )
}

export default Listen;
