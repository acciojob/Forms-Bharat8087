import React, { useRef } from 'react';

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    };
    console.log(formData);

    // Reset form fields
    fullNameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    passwordConfirmationRef.current.value = '';
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" ref={fullNameRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <div>
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input type="password" id="password_confirmation" ref={passwordConfirmationRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRef;
