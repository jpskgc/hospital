import React, {FC} from 'react';
import {Route, Switch} from 'react-router';
import Detail from './components/Detail/Detail';
import Bar from './components/Bar';
import Footer from './components/Footer';

const App: FC = () => (
  <>
    <Bar />
    <Switch>
      <Route path="/" exact component={Detail} />
    </Switch>
    <Footer />
  </>
);

export default App;
