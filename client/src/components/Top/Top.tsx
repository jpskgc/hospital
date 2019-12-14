import React from 'react';
import Header from './Header';
import TopTab from './TopTab';
import TopRecommendation from './TopRecommendation';

export default function Top() {
  return (
    <>
      <React.Fragment>
        <Header />
        <TopTab />
        <TopRecommendation />
      </React.Fragment>
    </>
  );
}
