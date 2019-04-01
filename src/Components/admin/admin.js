import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainAdmin from './mainAdmin';
import './admin.scss';

const admin = () => {
  const [login, setLogin] = useState(false)
  const [err, setErr] = useState(false)
  const [username, setUsername] = useState({
    user: '',
    pass: ''
  })

  const inputChange = e => {
    setUsername({ ...username, [e.target.name]: e.target.value });
  };

  const checkLogin = async() => {
    await axios.get('/api/logged-in')
    setLogin(true);
  }

  useEffect( ()=> {
    checkLogin()
  }, [login])

  const handleLogin = async () => {
    const {user, pass} = username
    try {
      await axios.put('/api/admin', { user, pass })
      setLogin(true);
    } catch {
      setErr(true);
    }
  };

  const handleEnter= (e) => { 
    e.key === 'Enter' && this.handleLogin()
  }

    return !login ? (
      <div className="admin">
        <div className="login">
          <div className="login_top">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/WikiOtter.svg/2000px-WikiOtter.svg.png"
              alt=""
            />
            <h1>Jaye Biles</h1>
            <h2>Login</h2>
          </div>
          <div className="login_btm">
            <div>
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_283078.png"
                alt="username"
              />
              <input
                type="text"
                name='user'
                onChange={inputChange}
              />
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/26/26053.svg"
                alt="lock"
              />
              <input
                type="password"
                name='pass'
                onChange={inputChange}
                onKeyDown={handleEnter}
              />
            </div>
            <button onClick={handleLogin}>Log In</button>
            {err && <p>**Invalid username, please try again.</p>}
          </div>
        </div>
      </div>
    ) : (
      <MainAdmin />
    );
  }

export default admin;