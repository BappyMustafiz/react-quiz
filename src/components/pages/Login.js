import { Link } from 'react-router-dom';
import image from '../../assets/images/login.svg';
import classes from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';
export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className='column'>
        <Illustration image={image} />
        <Form className={`${classes.login}`}>
          <TextInput
            type='email'
            placeholder='Enter email'
            icon='alternate_email'
          />
          <TextInput type='password' placeholder='Enter password' icon='lock' />
          <Button>
            <span>Submit now</span>
          </Button>
          <div class='info'>
            Don't have an account? <Link to='/signup'>Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
