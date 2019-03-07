import React, { Component } from 'react';
import axios from 'axios';

import MainAdmin from './mainAdmin';
import './admin.scss';

class admin extends Component {
  state = {
    login: false,
    err: false,
    user: '',
    pass: ''
  };

  componentDidMount() {
    axios.get('/api/logged-in').then(()=> {
      this.setState({login: true})
    })
  }

  handleLogin = async () => {
    const { user, pass } = this.state;
    try {
      await axios.put('/api/admin', { user, pass })
      this.setState({ login: true });
    } catch {
      this.setState({ err: true });
    }
  };

  handleEnter= (e) => { 
    e.key === 'Enter' && this.handleLogin()
  }

  render() {
    const { login, err } = this.state;
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
                onChange={e => this.setState({ user: e.target.value })}
              />
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/26/26053.svg"
                alt="lock"
              />
              <input
                type="password"
                onChange={e => this.setState({ pass: e.target.value })}
                onKeyDown={this.handleEnter}
              />
            </div>
            <button onClick={this.handleLogin}>Log In</button>
            {err && <p>**Invalid username, please try again.</p>}
          </div>
        </div>
      </div>
    ) : (
      <MainAdmin />
    );
  }
}

export default admin;