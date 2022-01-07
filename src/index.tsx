import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App';
import Counter from './components/Counter';
import Note from './components/Note';
import './css/App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/note">Note</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/app">Chara</Link>
          </li>
        </ul>
      </nav>

      <p className="tx-c">Hello TS React</p>

      <Route exact path="/counter">
        <Counter />
      </Route>

      <Route exact path="/note">
        <Note />
      </Route>

      <Route exact path="/app">
        <App />
      </Route>


    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
