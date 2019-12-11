import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  FaStethoscope,
  FaHeartbeat,
  FaRegHospital,
  FaUserNurse,
  FaClinicMedical,
} from 'react-icons/fa';

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
  })
);

export default function CategoryGrid() {
  const classes = useStyles();
  return (
    <>
      <Typography>カテゴリ別の患者クチコミ</Typography>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Typography>
                <FaStethoscope /> 診断説明
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Typography>
                <FaHeartbeat /> 手術の腕
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Typography>
                <FaRegHospital /> 入院施設
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Typography>
                <FaUserNurse /> 看護ケア
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Typography>
                <FaClinicMedical /> 退院後ケア
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
