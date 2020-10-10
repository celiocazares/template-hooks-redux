import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authenticationActions } from "../../actions/authenticationActions"

const Login = () => {
  const [userName, setUser] = useState('');
  const [userPassword, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory()

  const loginCallBack = (response) => {
    history.push('/users')
  }

  const login = () => {
    const params = {
      username: userName,
      password: userPassword
    }
    dispatch(authenticationActions.login(params, loginCallBack))
  }

  console.log('userName', userName)
  console.log('userPassword', userPassword)

  return (
    <>
      <h1>Login</h1>
      <div>
        <input type="text" value={userName} onChange={event => setUser(event.target.value)} placeholder="Username" />
        <input type="password" value={userPassword} onChange={event => setPassword(event.target.value)} placeholder="Password" />
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </>
  )
}

export default Login
