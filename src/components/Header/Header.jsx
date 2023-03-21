import {Container, MenuContainer} from './Header.styled.jsx';
import {ReactComponent as LogoIcon} from 'images/logoIcon.svg';
import UserMenu from 'components/UserMenu/UserMenu.jsx';

export default function Header(){

  return(
    <>
    <Container>
<LogoIcon/>
<MenuContainer>
  <UserMenu></UserMenu>
</MenuContainer>
    </Container>
    </>
  )
}
