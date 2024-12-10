import React from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import './styles/forms.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>React Forms</h1>
      <SignUpForm />
      <LoginForm />
    </div>
  );
};

export default App;
