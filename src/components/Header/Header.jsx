import { Link } from 'react-router-dom';
import {Container, MenuContainer} from './Header.styled.jsx';
import {ReactComponent as LogoIcon} from 'images/logoIcon.svg';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import { useAuth } from 'hooks/useAuth.js';

export default function Header(){
// const {isLoggedIn} = useAuth();
  return(
    <>
    <Container>
    <Link to="/"  alt="homepage">
<LogoIcon/>
</Link>
{/* {isLoggedIn && (
  <> */}
  <MenuContainer>
  <UserMenu></UserMenu>
</MenuContainer>
  {/* </> */}
{/* )} */}
    </Container>
    </>
  )
}
