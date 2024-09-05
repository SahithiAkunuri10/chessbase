import React, { useState } from 'react';
import '../css/SignupForm.css'; // Assuming you have styles in this CSS file
 
const SignupForm = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
 
  return (
    <div className="signup-form">
      {/* Email Input Field */}
      <div className={`form-group ${emailFocus ? 'focused' : ''}`}>
        <img
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpYtZ_HDM9OjtsbMsJ400drqrqg1NunIeRA&s"
          src="https://img.icons8.com/material-rounded/24/000000/user.png"
          alt="Email"
          className="icon"
        />
        <input
          type="email"
          id="email"
          onFocus={() => setEmailFocus(true)}
          onBlur={(e) => setEmailFocus(e.target.value !== '')}
          placeholder="Email"
        />
        <label
          htmlFor="email"
          className={emailFocus ? 'label-active' : 'label-hidden'}
        >
          Email
        </label>
      </div>
 
      {/* Password Input Field */}
      <div className={`form-group ${passwordFocus ? 'focused' : ''}`}>
        <img
          // src="data:image/png;base64,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"
         src="https://img.icons8.com/material-rounded/24/000000/user.png"
          alt="Password"
          className="icon"
        />
        <input
          type="password"
          id="password"
          onFocus={() => setPasswordFocus(true)}
          onBlur={(e) => setPasswordFocus(e.target.value !== '')}
          placeholder="Password"
        />
        <label
          htmlFor="password"
          className={passwordFocus ? 'label-active' : 'label-hidden'}
        >
          Password
        </label>
      </div>
 
      {/* Username Input Field */}
      <div className={`form-group ${usernameFocus ? 'focused' : ''}`}>
        <img
          // src="data:image/png;base64,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"
          src="https://img.icons8.com/material-rounded/24/000000/user.png"
          alt="Username"
          className="icon"
        />
        <input
          type="text"
          id="username"
          onFocus={() => setUsernameFocus(true)}
          onBlur={(e) => setUsernameFocus(e.target.value !== '')}
          placeholder="Username"
          maxLength="25"
        />
        <label
          htmlFor="username"
          className={usernameFocus ? 'label-active' : 'label-hidden'}
        >
          Username
        </label>
      </div>
 
      {/* Terms and Conditions Checkbox */}
      <div className="form-group">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          By signing up, I accept the Terms and Conditions
        </label>
      </div>
 
      {/* Submit Button */}
      <button className="submit-button">Create Account</button>
    </div>
  );
};
 
export default SignupForm;
