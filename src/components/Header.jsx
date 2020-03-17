import { Link } from 'gatsby';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Toolbar, Typography, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  titlebar: {
    backgroundColor: theme.palette.primary.main,
  },
  navContainer: {
    width: '100%',
    height: '100%',
  },
  navItem: {
    textAlign: 'center',
    padding: theme.spacing(0, 3),
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  linkActive: {
    borderBottom: '2px solid',
    borderBottomColor: '#fff',
  },
  logo: {
    fontFamily: 'Baloo Bhaina',
    display: 'block',
    padding: theme.spacing(0),
  },
}));

const navItems = [
  { name: 'Services', to: '#services' },
  { name: 'Contact', to: '#contact' },
];

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.titlebar} component="nav" variant="dense">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          className={classes.navContainer}
        >
          <Link to="#home" className={classes.link}>
            <Box className={classes.logo}>
              <Typography variant="h5">DV8</Typography>
            </Box>
          </Link>
          <Box flexGrow={1} />
          {navItems.map(({ name, to }) => (
            <Link to={to} className={classes.link}>
              <Box className={classes.navItem}>
                <Typography component="span" variant="subtitle2">
                  {name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
