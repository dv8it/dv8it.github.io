import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  contact: {
    width: '100%',
    // backgroundColor: theme.palette.primary.light,
  },
  buttons: {
    margin: theme.spacing(4, 0),
  },
  hero: {
    height: '100%',
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.contact}>
      <Box
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.hero}
      >
        <Typography variant="h5" name="contact">
          Get in Contact With Us
        </Typography>
        <Box p={2} />
        <Typography variant="body1">Get in touch and discuss your needs</Typography>
        <Box p={2} />
        <Button component="a" href="mailto:test@example.com" variant="contained" color="secondary">
          Email Us
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
