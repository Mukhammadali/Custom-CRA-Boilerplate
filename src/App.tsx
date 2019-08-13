import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root';
import Header from 'components/Header';

const App: React.FC = () => (
  <div className="App">
    <Header />
  </div>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
