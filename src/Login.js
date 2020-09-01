import React from "react";
import Header from "./Header";

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <section id="loginPage">
          <form className="loginForm"onSubmit={this.loginUser}>
            <h2>Login</h2>
            <label htmlFor="email">Enter email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="psw">Enter password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="psw"
              required
            />
            <button type="submit">Go</button>
          </form>
          <div className="signUp">
            <p>
              Do not have an account? <a href="#">Sign up here</a>.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
