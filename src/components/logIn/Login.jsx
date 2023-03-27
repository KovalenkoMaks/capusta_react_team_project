import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';
import GoogleLogin from 'components/GoogleLogin/GoogleLogin';
import Button from 'components/Button/Button';
import { DivEl, LoginContainer, LoginBody } from './Login.styled';
import HomePageView from 'components/HomePageView/HomePageView';
import Header from 'components/Header/Header';
import BgImage from 'components/BgImage/BgImage';
import * as Yup from 'yup';

const LogIn = () => {
  const dispath = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (event, formik) => {
    event.preventDefault();
    const btn = event.nativeEvent.submitter.id;
    console.log(formik.values);

    if (btn === 'buttonLogin') return dispath(logIn(formik.values));
    if (btn === 'buttonRegistration') return dispath(register(formik.values));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
  <>
      <Header />
      <BgImage type="Login">
      <LoginContainer>
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
                {formik => (
                  <Form onSubmit={event => handleSubmit(event, formik)}>
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
                        id="buttonLogin"
                        text="Log in"
                        textColor="#fff"
                        type="submit"
                        width="116px"
                        backgroundColor="#FF751D"
                        border="none"
                        filter="drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))"
                      />

                      <Button
                        id="buttonRegistration"
                        // onClick={e => handleSubmit}
                        text="Registration"
                        textColor="#52555F"
                        type="submit"
                        width="116px"
                        backgroundColor="#F5F6FB"
                        border="2px solid #F6F7FC"
                        filter="drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15))"
                      ></Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </DivEl>
        </LoginBody>
      </LoginContainer>
    </BgImage>
    </>
  );
};

export default LogIn;
