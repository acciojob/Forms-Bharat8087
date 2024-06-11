import React from 'react';

const Form = () => {
  return (
    <form id="info-form">
      <div>
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" name="full_name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <div>
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input type="password" id="password_confirmation" name="password_confirmation" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
