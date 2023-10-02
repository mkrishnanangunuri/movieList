import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
// import './App.css'; // Import your CSS file

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: 'Select', // Default profession
  });

  const [errors, setErrors] = useState({});
  const [usernameExistsError, setUsernameExistsError] = useState(false); // New state for username existence check
  const navigate = useNavigate(); // Get the navigation function using useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (!isValidPassword(formData.password)) {
      errors.password =
        'Password should contain at least 8 characters, including numbers, uppercase letters, and special characters';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }

    setErrors(errors);

    // Check if there are no errors
    return Object.keys(errors).length === 0;
  };

  const isValidPassword = (password) => {
    // Password should contain at least 8 characters, including numbers, uppercase letters, and special characters
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,}$/;
    return passwordPattern.test(password);
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidPhone = (phone) => {
    // Phone number should contain 10 digits
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const handleSignup = () => {
    // Validate the form before proceeding
    if (validateForm()) {
      // Check if the username already exists in local storage
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
      if (storedUserData && storedUserData.name === formData.name) {
        setUsernameExistsError(true);
      } else {
        // Username doesn't exist, proceed with signup

        // Store the user data in local storage
        localStorage.setItem('userData', JSON.stringify(formData));

        // Navigate to another component (replace '/login' with the desired route)
        navigate('/login');
      }
    }
  };

  return (
    <div className="container">
      <h2>User Signup</h2>
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
          {errors.name && <p className="error">{errors.name}</p>}
          {usernameExistsError && <p className="error">Username already exists.</p>}
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
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label className="label">Phone Number:</label>
          <input
            className="input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label className="label">Profession:</label>
          <select
            className="input"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option value="Student">Student</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Other">System Administrator</option>
            <option value="Other">Network Engineer</option>
            <option value="Other">UI/UX Developer</option>
            <option value="Other">QA Tester</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="button" type="button" style={{ width: '100px', height: '40px' }} onClick={handleSignup}>
          Sign Up
        </button>
        <p>Already have an account?</p>
        <Link to="/login" className="button" style={{ width: '100px', height: '80px', marginLeft: '10px' }}>
          Login
        </Link>
      </form>
    </div>
  );
}

export default Signup;
