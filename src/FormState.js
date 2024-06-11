import React, { useState } from 'react';

const FormState = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    
    setFormData({
      fullName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    });
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" name="fullName" value={formData.fullName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input type="password" id="password_confirmation" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormState;
