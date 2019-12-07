import React from 'react';
import {Container} from '@material-ui/core';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  head: {
    display: 'flex',
    width: 200,
  },
});

const data = [
  {
    subject: '診断説明 3.0',
    A: 3,
    fullMark: 5,
  },
  {
    subject: '手術の腕 3.0',
    A: 3,
    fullMark: 5,
  },
  {
    subject: '入院施設 3.0',
    A: 3,
    fullMark: 5,
  },
  {
    subject: '看護ケア 3.0',
    A: 3,
    fullMark: 5,
  },
  {
    subject: '退院後アフターケア 3.0',
    A: 3,
    fullMark: 5,
  },
];

export default function Chart() {
  const [value, setValue] = React.useState(2);

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography>患者による病院評価スコア</Typography>
      <div className={classes.head}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <RadarChart outerRadius={90} width={530} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={2} domain={[0, 5]} />
            <Radar
              name="墨東病院"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography>総合評価</Typography>
          <div className={classes.head}>
            <Rating name="read-only" value={value} readOnly />
            <Box ml={2} className={classes.head}>
              <Typography>{value}</Typography>
            </Box>
          </div>
        </Box>
      </div>
    </Container>
  );
}
