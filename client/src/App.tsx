import React, {FC} from 'react';
import {Route, Switch} from 'react-router';
import Detail from './components/Detail';
import Bar from './components/Bar';

const App: FC = () => (
  <>
    <Bar />
    <Switch>
      <Route path="/" exact component={Detail} />
    </Switch>
  </>
);

export default App;
