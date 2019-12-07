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
  return (
    <Container fixed>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
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
    </Container>
  );
}
