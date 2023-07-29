import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../SignupPage/index.css"


const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = () => {
   
    // Get stored user details from local storage
    const storedData = JSON.parse(localStorage.getItem('userDetails'));
    console.log(storedData)
    // Redirect to the next screen (MovieListPage) if Password and Name Matches
    if ( storedData.name === loginData.name && storedData.password === loginData.password) {
      
      console.log("have it")
      history.push('/movies');
    } else {
      alert("User Name and Password Doesn't match , Go to Signup Page");
    }
  };

  return (
    <div className='whole'>
      <h1>User Login</h1>
      <div className='input-con'>
        <label htmlFor='name'>Name:</label>
        <input type="text" id="name" onChange={handleInputChange} />
      </div>
      <div className='input-con'>
        <label htmlFor='password'>Password:</label>
        <input type="password" id="password" onChange={handleInputChange} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
