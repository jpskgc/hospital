import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import {Container} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  head: {
    display: 'flex',
  },
  recommendationName: {
    marginBottom: 10,
  },
  root: {
    marginBottom: 15,
  },
});

export default function Rankings() {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="md">
        <Typography>総合評価ランキング</Typography>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          className={classes.root}
        >
          <Grid item xs={10} md={2}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Box className={classes.recommendationName}>
                      <Typography variant="body2" align="center">
                        墨東病院
                      </Typography>
                    </Box>
                    <Box className={classes.head}>
                      <Rating
                        name="read-only"
                        value={value}
                        size="small"
                        readOnly
                      />
                      <Box ml={1}>
                        <Typography variant="body2">{value}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={10} md={2}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Box className={classes.recommendationName}>
                      <Typography variant="body2" align="center">
                        墨東病院
                      </Typography>
                    </Box>
                    <Box className={classes.head}>
                      <Rating
                        name="read-only"
                        value={value}
                        size="small"
                        readOnly
                      />
                      <Box ml={1}>
                        <Typography variant="body2">{value}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={10} md={2}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Box className={classes.recommendationName}>
                      <Typography variant="body2" align="center">
                        墨東病院
                      </Typography>
                    </Box>
                    <Box className={classes.head}>
                      <Rating
                        name="read-only"
                        value={value}
                        size="small"
                        readOnly
                      />
                      <Box ml={1}>
                        <Typography variant="body2">{value}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
