import React from 'react';
import {Container} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: 10,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    head: {
      display: 'flex',
      width: 200,
    },
  })
);

export default function SymptomsGrid() {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography>症状別の患者クチコミ</Typography>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              {/* <Box display="flex"> */}
              <Typography>骨折</Typography>
              <Typography variant="body2">
                期間1ヶ月未満、退院済み、男性
              </Typography>
              {/* </Box> */}
              <div className={classes.head}>
                <Rating name="read-only" value={value} readOnly />
                <Box ml={2} className={classes.head}>
                  <Typography>{value}</Typography>
                </Box>
              </div>
              <Typography variant="body2">回答日：2019年12月04日</Typography>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Typography>胃ガン</Typography>
              <Typography variant="body2">
                期間1ヶ月未満、退院済み、男性
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Typography>ヘルニア</Typography>
              <Typography variant="body2">
                期間1~6ヶ月、退院済み、男性
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Typography>心臓病</Typography>
              <Typography variant="body2">期間1~6ヶ月、入院中、男性</Typography>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Typography>子宮筋腫</Typography>
              <Typography variant="body2">
                期間1ヶ月未満、退院済み、女性
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Typography align="center">回答者一覧を見る</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
