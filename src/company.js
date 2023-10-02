import React from 'react';

const companyInfoStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '300px',
  margin: '0 auto',
  textAlign: 'center',
};

const headingStyle = {
  color: '#333',
  fontSize: '24px',
};

const addressStyle = {
  fontSize: '16px',
  margin: '10px 0',
};

function CompanyInfo() {
  return (
    <div style={companyInfoStyle}>
      <h2 style={headingStyle}>Company Info</h2>
      <p>
        <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
      </p>
      <p style={addressStyle}>
        <strong>Address:</strong> Sanjayanagar, Bengaluru-56
      </p>
      <p style={addressStyle}>
        <strong>Phone:</strong> XXXXXXXXX09
      </p>
      <p style={addressStyle}>
        <strong>Email:</strong> XXXXXX@gmail.com
      </p>
    </div>
  );
}

export default CompanyInfo;
