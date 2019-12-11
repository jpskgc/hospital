import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  head: {
    display: 'flex',
    width: 200,
  },
  heroContent: {
    backgroundColor: '#3f51b5',
    padding: theme.spacing(8, 0, 6),
    color: theme.palette.common.white,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="inherit"
            gutterBottom
          >
            「入院」のすべてを、オープンに。
          </Typography>
          <div></div>
        </Container>
      </div>
    </>
  );
}
