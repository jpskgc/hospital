import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    border: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[200],
    padding: theme.spacing(2),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
  },
}));

function createData(key: string, value: string) {
  return { key, value};
}

const rows = [
  createData('URL', 'http://bokutoh-hp.metro.tokyo.jp/'),
  createData('住所', '東京都墨田区江東橋4-23-15'),
];

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Box className={classes.sidebarAboutBox}>
      <Paper elevation={0}>
        <Typography variant="body2">病院情報</Typography>
        <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Paper>
        </Box>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        関連する企業
      </Typography>
      <Link display="block" variant="body1">
        title
      </Link>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
