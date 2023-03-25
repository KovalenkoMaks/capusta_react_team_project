import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { DivEl } from './LogIn.styled';
import GoogleLogin from 'components/GoogleLogin/GoogleLogin';
import Button from 'components/Button/Button';

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
          <Button
                  text="Log in"
                  textColor="#fff"
                  type="submit"
                  width= "116px"
                  backgroundColor="#FF751D"
                  border="none"
                  filter="drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))"

                />
           <Link to={'/registration'}>
             <Button
            text="Registration"
            textColor="#52555F"
            type="button"
            width= "116px"
            backgroundColor="#F5F6FB"
            border="2px solid #F6F7FC"
            filter="drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15))"             >
             </Button>
           </Link> 
          </div>
        </Form>
      </Formik>
    </DivEl>
  );
};

export default LogIn;
