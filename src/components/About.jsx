import { Link } from 'gatsby';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Toolbar, Typography, Box, Container, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  about: {
    height: '90vh',
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  buttons: {
    margin: theme.spacing(4, 0),
  },
  hero: {
    height: '100%',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.about}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
      <a name="home" />
      <Box
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.hero}
      >
        <Typography variant="h3">DV8 IT Systems</Typography>
        <Box p={2} />
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mollis metus. Donec sed eleifend dolor. Integer sem ligula, interdum sit amet nisl non, convallis maximus ipsum. Nam tincidunt tincidunt tortor, a hendrerit arcu consequat a. Suspendisse condimentum dui ac turpis fermentum faucibus. Integer blandit sollicitudin lectus non pretium. Sed sit amet euismod risus, ut tincidunt eros.
        </Typography>
        <Box p={2} />
        <Box display="flex" flexDirection="row" className={classes.buttons}>
          <Button variant="contained" color="primary">Contact Us</Button>
          <Box p={1} />
          <Button variant="contained" color="primary">Learn More</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
