import {Container, MenuContainer} from './Header.styled';

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
