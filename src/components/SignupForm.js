import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

import { useAuth } from '../contexts/AuthContext';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password doesn't match");
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);
      navigate('/');
    } catch (error) {
      console.log('error');
      setLoading(false);
      setError('Failed to create an account');
    }
  }

  return (
    <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
      <TextInput
        required
        type='text'
        placeholder='Enter name'
        icon='person'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        required
        type='email'
        placeholder='Enter email'
        icon='alternate_email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        required
        type='password'
        placeholder='Enter password'
        icon='lock'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        required
        type='password'
        placeholder='Confirm password'
        icon='lock_clock'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        required
        text='I agree to the Terms & Conditions'
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button type='submit' disabled={loading}>
        <span>Submit now</span>
      </Button>
      {error && <p className='error'>{error}</p>}
      <div className='info'>
        Already have an account? <Link to='/login'>Login</Link> instead.
      </div>
    </Form>
  );
}

export default SignupForm;
