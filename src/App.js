import React from 'react';
import './App.css';
import Users from './Pages/users/users'

// redux
import { Provider } from 'react-redux';

import store from './store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
