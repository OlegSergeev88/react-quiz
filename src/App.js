import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

import Quiz from './containers/Quiz/Quiz';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={QuizList} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/quiz-creator' component={QuizCreator} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </Layout>
  );
}

export default App;
