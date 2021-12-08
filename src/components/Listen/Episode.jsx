import React from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from '../styles'
import clsx from 'clsx';

const Episode = ({ episode }) => {
    const classes = useStyles();
    const { epNum, title, description, link, interview } = episode;
    console.log(episode);
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
                            <Typography>{interview ? interview : 'Episode Summary'}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                {description}
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
