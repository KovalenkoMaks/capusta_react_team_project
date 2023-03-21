import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { DivEl } from './Registration.styled';

const Registration = () => {
  const dispath = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (values, { resetForm }) => {
    dispath(register(values));

    // resetForm();
    // let check = data.find(
    //   e => e.name.toLowerCase() === values.name.toLowerCase()
    // );
    // if (check === undefined) {
    //   resetForm();
    //   try {
    //     await addContact(values);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } else {
    //   swal(`"${values.name}" is alredy in contacts`, '', 'warning');
    // }
  };
  return (
    <DivEl>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="email">
            Email
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
            Password
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
            <button type="submit">Sign Up</button>
            <Link to={'/login'}>LOG IN</Link>
          </div>
        </Form>
      </Formik>
    </DivEl>
  );
};
export default Registration;
