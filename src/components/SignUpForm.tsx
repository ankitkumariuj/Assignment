import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpValidationSchema } from '../utils/validation';
import { getPasswordStrength } from '../utils/passwordStrength';

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues: SignUpFormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setSubmitted(true);
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
              <div className="password-strength">
                Strength: {getPasswordStrength(values.password)}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field id="confirmPassword" name="confirmPassword" type="password" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>

            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
      {submitted && <p className="success">Sign Up Successful!</p>}
    </div>
  );
};

export default SignUpForm;
