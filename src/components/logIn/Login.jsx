import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

const LogIn = () => {
  const dispath = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (values, { resetForm }) => {
    dispath(logIn(values));

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
        <button type="submit">LOG IN</button>
        <Link to={'/registration'}>Registration</Link>
      </Form>
    </Formik>
  );
};

export default LogIn;
