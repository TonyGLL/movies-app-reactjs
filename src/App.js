import React from 'react';

import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './layouts/Header';
import List from './components/List';
import Movie from './components/Movie'

const AppStyled = styled.div`
  .main{
    height: 100vh;
  }
  .container {
    background: #343A40;
  }
`;

function App() {
  return (
    <AppStyled>

      <Router>

        <Link to="/">
          <Header/>
        </Link>

        <Switch>

          <Route path="/" exact>
            <main className="bg-dark">
                <div className="container">
                    <List />
                </div>
            </main>
          </Route>

          <Route path="/movie/:id" exact>
            <main className="bg-dark pt-4 main">
                <div className="container">
                    <Movie />
                </div>
            </main>
          </Route>

        </Switch>

      </Router>
      
    </AppStyled>
  );
}

export default App;
