import React from 'react';
import {Container} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  head: {
    display: 'flex',
    width: 200,
  },
});

export default function Header() {
  const [value, setValue] = React.useState(2);

  const classes = useStyles();
  return (
    <Container fixed>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography variant="h5" gutterBottom>
          墨東病院
        </Typography>
        <div className={classes.head}>
          <Rating name="read-only" value={value} readOnly />
          <Box ml={2}>
            <Typography>{value}</Typography>
          </Box>
        </div>
      </Box>
    </Container>
  );
}
