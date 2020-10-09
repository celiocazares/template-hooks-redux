import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { authenticationActions } from "../../actions/authenticationActions"

const Login = () => {
  const [userName, setUser] = useState('');
  const [userPassword, setPassword] = useState('');
  const dispatch = useDispatch();

  // useState()

  const login = () => {
    const params = {
      username: userName,
      password: userPassword
    }
    dispatch(authenticationActions.login(params))
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
