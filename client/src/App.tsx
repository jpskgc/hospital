import React, {FC} from 'react';
import {Route, Switch} from 'react-router';
import Detail from './components/Detail/Detail';
import Top from './components/Top/Top';
import Footer from './components/common/Footer';

const App: FC<{}> = () => (
  <>
    <Switch>
      <Route path="/detail" exact component={Detail} />
      <Route path="/" exact component={Top} />
    </Switch>
    <Footer />
  </>
);

export default App;
