import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import GoogleLogin from 'components/GoogleLogin/GoogleLogin';
import Button from 'components/Button/Button';
import { DivEl, LoginContainer, LoginBody } from './Login.styled';
import HomePageView from 'components/HomePageView/HomePageView';
import Header from 'components/Header/Header';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
const notifyEmail = () => toast('wrong Email');

const LogIn = () => {
  const dispath = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (values, { resetForm }) => {
    dispath(logIn(values));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <>
      <LoginContainer>
        <Header />
        <LoginBody>
          <HomePageView />
          <DivEl>
            <p>You can log in with your Google Account:</p>
            <div className="login-form">
              <GoogleLogin />
              <p>Or log in using an email and password, after registering:</p>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
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
                      {errors.email && touched.email && (
                        <div>{notifyEmail()}</div>
                      )}
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
                        width="116px"
                        backgroundColor="#FF751D"
                        border="none"
                        filter="drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))"
                        // onClick={() => {
                        //   notify();
                        // }}
                      />
                      <Link to={'/registration'}>
                        <Button
                          text="Registration"
                          textColor="#52555F"
                          type="button"
                          width="116px"
                          backgroundColor="#F5F6FB"
                          border="2px solid #F6F7FC"
                          filter="drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15))"
                        ></Button>
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </DivEl>
        </LoginBody>
      </LoginContainer>
    </>
  );
};

export default LogIn;
