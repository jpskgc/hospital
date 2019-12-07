import React, {FC} from 'react';
import Header from './Header';
import Tab from './DetailTab';
import Chart from './Chart';
import CategoryGrid from './CategoryGrid';

const App: FC = () => (
  <>
    <Header />
    <Tab />
    <Chart />
    <CategoryGrid />
  </>
);

export default App;
