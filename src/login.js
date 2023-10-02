import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import your external CSS file

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);

  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Retrieve user data from local storage (replace with your own authentication logic)
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.name === formData.name && storedUserData.password === formData.password) {
      // Credentials match, set isAuthenticated to true
      setIsAuthenticated(true);

      // Navigate to the Dashboard component (replace '/home' with the actual path)
      navigate('/movie');
    } else {
      // Credentials do not match
      setIsAuthenticated(false);
    }

    // Set loginAttempted to true to display the message
    setLoginAttempted(true);
  };

  return (
    <div className="container">
      <h2>User Login</h2>
      <form>
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input
            className="input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="button" type="button" style={{width: '100px', height: '40px'}} onClick={handleLogin}>
          Log In
        </button>
      </form>

      {loginAttempted && !isAuthenticated && (
        <p className="error">Invalid Credentials. Please try again.</p>
      )}

      {isAuthenticated && (
        <p>Login successful! You can navigate to the next screen.</p>
      )}
    </div>
  );
}

export default Login;
