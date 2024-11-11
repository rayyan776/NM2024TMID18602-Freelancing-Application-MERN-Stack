import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/freelancer/register.css'
const Register = () => {
  const { setUsername, setEmail, setPassword, setUsertype, register } = useContext(GeneralContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    await register();
  };

  return (
    

<form className="authForm2" onSubmit={handleRegister}>
      <div className="signUpDetails">
        
        <div className="div2">
          <div className="getStartedWithMaker">Get Started With Spacelance</div>
          <div className="gettingStartedIsEasy">Getting started is easy</div>
          <div className="div3">
            <div className="div4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48f2990fc178b2be24c7bd4f16293361730c5f15ea72f264173b64aa8e11afaf?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a"
                className="img"
              />
              <div>Google</div>
            </div>
            
          </div>
        </div>
        <div className="div6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1931a8daa1559511fb575dda931561cfe00ee49ae84a41a113b104d33a6b41d5?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a"
            className="img3"
          />
          <div className="orContinueWith">Or continue with</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1931a8daa1559511fb575dda931561cfe00ee49ae84a41a113b104d33a6b41d5?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a"
            className="img4"
          />
        </div>


      
      <h2>Register</h2>
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingEmail">Email address</label>
      </div>
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={(e) => setUsertype(e.target.value)}
      >
        <option value="">User type</option>
        <option value="freelancer">Freelancer</option>
        <option value="client">Client</option>
        <option value="admin">Admin</option>
      </select>

      <button className="btn btn-primary" type="submit">
        Sign up
      </button>
      <p>
        Already registered? <a href="/login">Login</a>
      </p>
    <div className ="image">   
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e3512749dae65a7fb216051a076c6591530e28b8b71767338d5f175c9ad35607?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3512749dae65a7fb216051a076c6591530e28b8b71767338d5f175c9ad35607?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3512749dae65a7fb216051a076c6591530e28b8b71767338d5f175c9ad35607?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3512749dae65a7fb216051a076c6591530e28b8b71767338d5f175c9ad35607?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3512749dae65a7fb216051a076c6591530e28b8b71767338d5f175c9ad35607?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3512749dae65a7fb216051a076c6591530e28b8b71767338d5f175c9ad35607?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3512749dae65a7fb216051a076c6591530e28b8b71767338d5f175c9ad35607?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3512749dae65a7fb216051a076c6591530e28b8b71767338d5f175c9ad35607?placeholderIfAbsent=true&apiKey=2672a011850d4bada66e2c2f92ffe75a"
        className="styles"
      />
    </div>
        


         </div>
         </form>
  );
};

export default Register;
