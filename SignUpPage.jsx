// import React,{useState} from 'react';
// import SignupForm from './SignupForm';
 
// function SignUpPage() {
//   return (
//     <div style={styles.container}>
 
//       {/* Register Heading */}
//       <h2 style={styles.registerHeading}>Register</h2>
 
//       <h1 style={styles.heading}>Create your account</h1>
      
//       <div style={styles.imageContainer}>
//         <img
//           src={`${process.env.PUBLIC_URL}/Chess_img.jpg`}
//           alt="Chess"
//           style={styles.chessImage}
//         />
//       </div>
      
//       <button style={styles.button}>Sign Up with Email</button>
//       <div style={styles.orContainer}>
//         <span>OR</span>
//       </div>
//       <button style={styles.button}>Continue with Google</button>
//     </div>
//   );
// }
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import SignupForm from './SignupForm';
// import LoginPage from './LoginPage';
 
const SignUpPage=()=> {
  // State to manage whether the SignupForm is displayed
  const [showSignupForm, setShowSignupForm] = useState(false);
 
   const navigate=useNavigate();
  // Function to handle the button click event
  const handleSignUpWithEmailClick = () => {
    setShowSignupForm(true); // Set the state to true to show the form
  };

  const handleLoginClick=()=>{
    navigate('/login');
  };
 
  return (
    <div style={styles.container}>
      {/* Register Heading */}
      <h2 style={styles.registerHeading}>Register</h2>
     <button onclick={handleLoginClick}>LogIn</button>
      <h1 style={styles.heading}>Create your account</h1>
 
      <div style={styles.imageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/Chess_img.jpg`}
          alt="Chess"  
          style={styles.chessImage}
        />
      </div>
 
      {/* Conditionally render the button or the form */}
      {!showSignupForm ? (
        <>
          <button
            style={styles.button}
            onClick={handleSignUpWithEmailClick} // Handle click event
          >
            Sign Up with Email
          </button>
          <div style={styles.orContainer}>
            <span>OR</span>
          </div>
          <button style={styles.button}>Continue with Google</button>
        </>
      ) : (
        <SignupForm /> // Show the SignupForm when the state is true
      )}
    </div>
  );
}
 

 
const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  registerHeading: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  imageContainer: {
    marginBottom: '20px',
  },
  chessImage: {
    width: '100px',
    height: '100px', // Adjust as necessary
  },
  button: {
    marginBottom: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  orContainer: {
    marginBottom: '10px',
    fontSize: '14px',
  }
};
 
export default SignUpPage;
