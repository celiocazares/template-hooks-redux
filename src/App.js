import React from 'react';
import './App.css';
import Users from './Pages/users/users'

// redux
import { Provider } from 'react-redux';

import store from './store'
import Login from './Pages/users/login';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Users /> */}
        <Login />
      </div>
    </Provider>
  );
}

export default App;
