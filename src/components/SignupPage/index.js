import React, { useState } from 'react';
import { useHistory , Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import "./index.css"


const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  });

const [message,setMessage]=useState("")


  const handleInputChange = (e) => {
  const {name,value}=e.target


  setUserDetails((prev)=>({
    ...prev,
    [name]:value
  
  })
  )    

  };

  const history = useHistory();

  const handleSignup = () => {
    console.log(userDetails)
    //if all the inputs are filled then only it stores the details into local storage and go to login page

    if(userDetails.name!=="" && userDetails.email!=="" && userDetails.password!=="" && userDetails.phone!=="" && userDetails.profession!==""){
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      history.push('/login');
      setMessage("")
    }       //otherwise display message to fil all the inputs
    else{
      setMessage("Fill all the detials ")
      history.push('/');
    }
  };

  //dummy professions data for dropdown 
  const professions = ['Software Engineer', 'Doctor', 'Teacher', 'Student'];

  return (
    <div className="whole">
      <h1>Enter Details for Reistration</h1>
      <div className='input-con'>
        <label className='label'>Name</label>
        <input type="text" name="name" onChange={handleInputChange} className='input'/>
      </div>
      <div  className='input-con'>
        <label>Password</label>
        <input type="password" name="password" onChange={handleInputChange} />
      </div>
      <div  className='input-con'>
        <label>Email</label>
        <input type="email" name="email" onChange={handleInputChange} />
      </div>
      <div  className='input-con'>
        <label>Phone</label>
        <input type="tel" name="phone" onChange={handleInputChange} />
      </div>
      <div  className='input-con'>
        <label>Profession</label>
        <select name="profession" onChange={handleInputChange}>
          <option value="">Select Profession</option>
          {professions.map((profession) => (
            <option key={profession} value={profession}>
              {profession}
            </option>
          ))}
        </select>
      </div>
     <button onClick={handleSignup}><Link to="/login"> Signup  </Link></button>

     <p>{message}</p>
    </div>
  );
};

export default SignupPage;


