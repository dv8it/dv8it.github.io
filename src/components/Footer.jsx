import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  contact: {
    height: '64px',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  buttons: {
    margin: theme.spacing(4, 0),
  },
  hero: {
    height: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.contact}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
      <a name="contact" />
      <Box
        p={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.hero}
      >
        <Typography variant="body1">© Copyright Jack Adamson 2020</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
