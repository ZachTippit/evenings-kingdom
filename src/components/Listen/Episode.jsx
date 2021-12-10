import React from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from '../styles'
import clsx from 'clsx';

const Episode = ({ episode }) => {
    const classes = useStyles();
    const { epNum, title, description, link, interview } = episode;
    return (
        <Card variant="">
            <CardContent>
                <div className={classes.episodeCard}>
                    <div className={classes.episodeTitle}>
                        <Typography variant='h5'>{title}</Typography>
                    </div>
                    {   interview ? 
                        <iframe src={link} className={clsx(classes.epAudioPlayer,classes.centerDiv)} frameborder="0" scrolling="no"></iframe>
                        :
                        <iframe className={clsx(classes.epAudioPlayer,classes.centerDiv)} title={title} allowtransparency="true" scrolling="no" data-name="pb-iframe-player" src={link}></iframe>
                    }
                    <div className={classes.epAccordion}>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography><b>{interview ? interview : 'Episode Summary'}</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                {description}
                            </Typography>
                            <Typography className={classes.topPad24}>
                                <i>Have you subscribed yet?</i> <Link href='./subscribe'>Sign up here!</Link>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <hr className={classes.divider}></hr>
                </div>
            </CardContent>
        </Card>      
    )
}

export default Episode
