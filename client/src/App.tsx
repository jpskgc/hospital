import React, {FC} from 'react';
import {Route, Switch} from 'react-router';
import Demo from './components/Demo';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Demo} />
    </Switch>
  </>
);

export default App;
