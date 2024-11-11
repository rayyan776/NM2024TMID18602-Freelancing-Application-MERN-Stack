import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import { useHistory } from 'react-router-dom'; 
import '../styles/freelancer/login.css'

const Login = () => {
  const { setEmail, setPassword, login } = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  };

  

  return (
    <main className="loginContainer">
     <div className="contentWrapper1">
    <section className="leftColumn">
      <div className="loginFormWrapper">

        <h1 className="welcomeTitle">Welcome Back</h1>
        <p className="loginSubtitle">Login into your account</p>

        <div className="socialLoginSection">
          <button className="socialButton">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f19eaab7e7d8ed5c20981a0eadd17fb2ea4e16ccfa1d2830ce513b1f2c4995f?placeholderIfAbsent=true&apiKey=3c5ef9ce32e644578e9a06c4845a8d8e" 
              className="socialIcon" 
              alt=""
            />
            <span>Google</span>
          </button>
        </div>

        <div className="dividerSection">
          <div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70ef49cefbe8dded645a0be4ca931201ab95f6e891e211c5e8533d066321e463?placeholderIfAbsent=true&apiKey=3c5ef9ce32e644578e9a06c4845a8d8e" className="divider" alt="" />
            <span className="dividerText">Or continue with</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/501303835d09f7254820e5c8b373138ec2e2a7b3c6cb47be91330647b832bc8a?placeholderIfAbsent=true&apiKey=3c5ef9ce32e644578e9a06c4845a8d8e" className="divider1" alt="" />
        </div>

        <form className="authForm1" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-floating mb-3 authFormInputs">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3 authFormInputs">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary thalaiva">
            Sign in
          </button>
          <div className="signupPrompt">
            <p className="signupText">Don't have an account?</p>
            <a className="signupLink" href="/register">Sign up!</a>
          </div>

        </form>
      </div>
    </section>

    <section className="rightColumn">
      <div className="heroSection">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/431f8bb7b7e3abbf379f7d5551f1e4fa1b827d74f6ac9eeca020c0857236d3d8?placeholderIfAbsent=true&apiKey=3c5ef9ce32e644578e9a06c4845a8d8e" 
          className="heroImage" 
          alt="Hero background"
        />
        
      </div>
    </section>
  </div>
</main>

  );
};

export default Login;
