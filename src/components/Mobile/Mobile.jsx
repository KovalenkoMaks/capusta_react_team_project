import { InputForm } from 'components/ExpensesPage/Form/Form';
import { Link } from "react-router-dom"
import {ReactComponent as Arrow} from '../../images/arrowGoBack.svg'

const Mobile = () => {
  return (
    <>
      <Link to='/'  style={{padding: '6px 3px', position: 'absolute', top: '66px'}}><Arrow width='18' height='12'/></Link>
      <InputForm />
    </>
  );
};

export default Mobile;
