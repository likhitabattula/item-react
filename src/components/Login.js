import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
 
  const validateEmail = (email) => {
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return regex.test(email);
       };

   const validatePhone = (phone) => {
        const   regex = /^\d{10}$/;
        return regex.test(phone);
      };
   
      const handleLogin= (event) => {
        event.preventDefault();
        let valid = true;
        let newErrors = { email: '', phone: '' };

 
    

  if (!email) {
           newErrors.email = 'Email is required';
           valid = false;
         } else if (!validateEmail(email)) {
           newErrors.email = 'Invalid email format';
           valid = false;
         }
    
        
  // if (!password) {
  //      formErrors.password = 'Password is required';
  //    } else if (password.length < 6) {
  //      formErrors.password = 'Password must be at least 6 characters';
  //    }

 

  if (!phone) {
        newErrors.phone = 'Please enter valid phone number';
        valid = false;
       } else if (!validatePhone(phone)){
        newErrors.phone ='Invalid format';
        valid = false;
      }
   
  
 
  setErrors(newErrors);
  
  if (valid) {
    // Redirect to Dashboard if valid
    navigate('/explore');
  }

};
    
        
      
          
  
   

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h2 style={{color: 'white'}}> Login </h2>
    <form > 
        
      <div>
      <input
        type="email"
        className="custom-placeholder"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        style={{backgroundColor: ' #d0b200', marginBottom: '10px', padding: '8px', width: '200px', borderRadius: '10px' }}
      />
       {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
       </div>

        {/* for password */}

       {/* <div>
      <input
        type="password"
        className="custom-placeholder"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ backgroundColor: ' #d0b200', marginBottom: '10px',  width: '200px',  padding: '8px', margin: '10px 0', borderRadius: '10px' }}
      />
       {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div> */}


       {/* for phone number */}
       

       <div>
          <input
            type="tel"
            className="custom-placeholder"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Optional pattern for formatting
            required

            style={{ backgroundColor: ' #d0b200', marginBottom: '10px', padding: '8px', width: '200px', borderRadius: '10px' }}
          />
          {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
       </div>
  


      
      <button onClick={handleLogin} style={{ padding: '8px 16px',   width: '100px', borderRadius: '15px' }}>
        Submit
      </button>
      </form>
    </div>
  );

}
export default Login;