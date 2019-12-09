import React, {FC} from 'react';
import Header from './Header';
import Tab from './DetailTab';
import Chart from './Chart';
import CategoryGrid from './CategoryGrid';
import SymptomsGrid from './SymptomsGrid';

const App: FC = () => (
  <>
    <Header />
    <Tab />
    <Chart />
    <CategoryGrid />
    <SymptomsGrid />
  </>
);

export default App;
