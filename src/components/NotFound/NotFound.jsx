
import { ReactComponent as NotFoundIcon } from '../../images/404NotFound.svg';
import { Link } from 'react-router-dom';
import { NotFoundContainer } from './NotFound.styled';
import Button from 'components/Button/Button';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundIcon/>
      <Button
        type='button'
        width="150px"
        disabled={false}
        onClick={null}
        backgroundColor='#f57828'
        border='none'
        textColor='#fff'
        text={
          <Link to="/">
            Bring me home
          </Link>
        }
      ></Button>
    </NotFoundContainer>
  );
};
