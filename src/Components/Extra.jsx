import React, { useState } from 'react'
import { Grid } from '@mui/material';
import clsx from 'clsx';
import SignInBox from './SignInBox'
import EmailOnlySubscribeForm from './EmailOnlySubscribeForm';
import WalledContent from './WalledContent'

import useStyles from './styles';


const Extra = ({page}) => {
    const classes = useStyles();
    const [correctPassword, setCorrectPassword] = useState('');

    const handlePassword = (event) => {
        console.log(event.password);
        if(event.password === 'thankyouforlistening'){
            setCorrectPassword('true');
            return;
        }
    }

    return (
        <div>
                { !correctPassword ?
                    (
                        <>
                            <Grid container spacing={30} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '95vh' }}>
                                    <Grid item lg={1} xs={1} sx={{width: '80%'}}>
                                        <SignInBox passwordCheck={handlePassword}/>
                                    </Grid>
                            </Grid>
                            <EmailOnlySubscribeForm />
                        </>
                    ) 
                    :
                    ( <WalledContent /> ) 
                }
        </div>
    )
}

export default Extra
