import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginValidationSchema } from '../utils/validation';

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues: LoginFormValues = {
    email: localStorage.getItem('rememberedEmail') || '',
    password: '',
    rememberMe: !!localStorage.getItem('rememberedEmail'),
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          setSubmitted(true);

          if (values.rememberMe) {
            localStorage.setItem('rememberedEmail', values.email);
          } else {
            localStorage.removeItem('rememberedEmail');
          }
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>
              <Field type="checkbox" name="rememberMe" /> Remember Me
            </label>
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
      {submitted && <p className="success">Login Successful!</p>}
    </div>
  );
};

export default LoginForm;
