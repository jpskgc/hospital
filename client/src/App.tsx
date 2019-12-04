import React, {FC} from 'react';
import {Route, Switch} from 'react-router';
import Demo from './components/Demo';
import Bar from './components/Bar';

const App: FC = () => (
  <>
    <Bar />
    <Switch>
      <Route path="/" exact component={Demo} />
    </Switch>
  </>
);

export default App;
