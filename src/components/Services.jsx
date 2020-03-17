import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Divider,
} from '@material-ui/core';
import ItPhoto from '../images/it-photo.jpeg';

const useStyles = makeStyles(theme => ({
  about: {
    width: '100%',
    // backgroundColor: theme.palette.secondary.dark,
  },
  buttons: {
    margin: theme.spacing(4, 0),
  },
  hero: {
    height: '100%',
  },
  services: {
    width: '80%',
  },
}));

const ServiceCard = ({ img, title, description }) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardMedia component="img" alt={title} height="140" image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Services = () => {
  const classes = useStyles();
  return (
    <Container className={classes.about}>
      <Box
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.hero}
      >
        <Typography variant="h5" name="services">
          Our Services
        </Typography>
        <Box p={4} className={classes.services}>
          <Grid container spacing={3}>
            <ServiceCard
              title="Consult"
              description="We consult with business to deliver synergistic, momentum saving actionable insights into how you can revolutionize your workforce."
              img={ItPhoto}
            />
            <ServiceCard
              title="Administer"
              description="We consult with business to deliver synergistic, momentum saving actionable insights into how you can revolutionize your workforce."
              img={ItPhoto}
            />
            <ServiceCard
              title="Develop"
              description="We consult with business to deliver synergistic, momentum saving actionable insights into how you can revolutionize your workforce."
              img={ItPhoto}
            />
          </Grid>
        </Box>
      </Box>
      <Divider />
    </Container>
  );
};

export default Services;
