import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({ 
    blkBG: {
        background: 'black',
    },

    whiteBG: {
        background: 'white'
    },

    liteGrayBG: {
        background: 'lightGray'
    },

    home: {
        width: '100%',
        minHeight: '90vh'
    },

    splashText: {
    },

    centerDiv: {
        display: 'block',
        margin: 'auto'
    },

    centerText: {
        textAlign: 'center'
    },

    topPad50: {
        paddingTop: '50px'
    },

    btmPad50: {
        paddingBottom: '50px'
    },

    logo: {
        maxWidth: '200px',
        paddingRight: '10%',
        marginTop: '10px',
        marginBottom: '10px'
    },

    EKTitle: {
        display: 'block',
        width: '80%',
        margin: 'auto'
    },

    emailSignUp: {
        width: '30%',
    },
    
    subBtn: {
        height: '4em'
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
    }
}))