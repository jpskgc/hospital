import React from 'react';
import Header from './Header';
import Tab from './DetailTab';
import Chart from './Chart';
import CategoryGrid from './CategoryGrid';
import SymptomsGrid from './SymptomsGrid';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import Bar from '../common/Bar';

export default function Detail() {
  return (
    <>
      <React.Fragment>
        <Bar />
        <Container maxWidth="md">
          <Header />
          <Tab />
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              <Chart />
              <CategoryGrid />
              <SymptomsGrid />
            </Grid>
            <SideBar />
          </Grid>
        </Container>
      </React.Fragment>
    </>
  );
}
