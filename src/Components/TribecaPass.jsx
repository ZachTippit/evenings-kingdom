import React, { useState } from 'react'
import { Grid } from '@mui/material';
import SignInBox from './SignInBox'
import EmailOnlySubscribeForm from './EmailOnlySubscribeForm';
import Tribeca from './Tribeca'

import useStyles from './styles';


const TribecaPass = () => {
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
                            <Grid container spacing={30} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '80vh' }}>
                                    <Grid item lg={1} xs={1} sx={{width: '80%'}}>
                                        <SignInBox passwordCheck={handlePassword}/>
                                    </Grid>
                            </Grid>
                            <EmailOnlySubscribeForm />
                        </>
                    ) 
                    :
                    ( <Tribeca /> ) 
                }
        </div>
    )
}

export default TribecaPass
