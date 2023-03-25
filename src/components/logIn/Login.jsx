import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { DivEl } from './LogIn.styled';
import GoogleLogin from 'components/GoogleLogin/GoogleLogin';

const LogIn = () => {
  const dispath = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (values, { resetForm }) => {
    dispath(logIn(values));
  };

  return (
    <DivEl>
      <p>You can log in with your Google Account:</p>
      <GoogleLogin/>
      <p>Or log in using an email and password, after registering:</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="email">
            <span>Email</span>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <div>
            <button type="submit">LOG IN</button>
            <Link to={'/registration'}>Registration</Link>
          </div>
        </Form>
      </Formik>
    </DivEl>
  );
};

export default LogIn;
