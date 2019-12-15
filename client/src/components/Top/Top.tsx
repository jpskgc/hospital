import React from 'react';
import Header from './Header';
import TopTab from './TopTab';
import TopRecommendation from './TopRecommendation';
import Rankings from './Rankings';

export default function Top() {
  return (
    <>
      <React.Fragment>
        <Header />
        <TopTab />
        <TopRecommendation />
        <Rankings />
      </React.Fragment>
    </>
  );
}
