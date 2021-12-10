import { makeStyles } from '@mui/styles';
import Background from '../img/fantasybg.png'

export default makeStyles((theme) => ({ 
    App: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        overflowX: 'hidden'
    },

    blkBG: {
        background: 'black',
    },

    whiteBG: {
        background: 'white'
    },

    liteGrayBG: {
        background: 'lightGray'
    },

    titleBG: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.75,
    },

    authorText: {
        fontSize: '100vw'
    },

    home: {
        width: '100%',
        minHeight: '90vh'
    },

    centerDiv: {
        display: 'block',
        margin: 'auto'
    },

    width70: {
        width: '70%'
    },

    centerText: {
        textAlign: 'center'
    },

    topPad50: {
        paddingTop: '50px'
    },

    topPad24: {
        paddingTop: '24px'
    },

    btmPad50: {
        paddingBottom: '50px'
    },

    pad24: {
        paddingLeft: '24px',
        paddingRight: '24px'
    },

    logo: {
        maxWidth: '200px',
        paddingRight: '10%',
        marginTop: '10px',
        marginBottom: '10px'
    },

    EKTitle: {
        display: 'block',
        width: '90%',
        margin: 'auto'
    },

    EKRust: {
        display: 'block',
        width: '100%',
        margin: 'auto',
        maxHeight: '600px',
        maxWidth: '600px'
    },

    picTextBG: {
        backgroundColor: 'rgba(20,20,20,0.6)'
    },

    emailSignUp: {
        width: '30%'
    },
    
    subBtn: {
        height: '4em'
    },

    navBtn: {
        width: '100%',
    },

    navDropdown: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    audioPlayer: {
        height: '240',
        width: '70%',
        border: 'none',
        minWidth: 'min(100%, 430px)'
    },

    flex: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    footer: {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '10vh'
    },

    listen: {
        width: '70%',
        margin: 'auto'
    },

    episodeCard: {
        display: 'block',
        margin: 'auto',
        width: '100%',
    },

    episodeTitle: {
        margin: 'auto',
        paddingBottom: '1rem'
    },

    epAccordion: {
        display: 'block',
        margin: 'auto',
        marginTop: '1rem'
    },
    
    epAudioPlayer: {
        height: '240',
        border: 'none',
        width: '100%'
    },

    divider: {
        borderTop: '8px solid #bbb',
        borderRadius: '5px',
        marginTop: '20px'
    },

    fanArtLogo: {
        display: 'block',
        margin: 'auto',
        width: '50%'
    }
}))