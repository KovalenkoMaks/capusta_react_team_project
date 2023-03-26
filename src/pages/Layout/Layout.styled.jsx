import mobile from '../../images/backgroundMobile.svg';
import tablet from '../../images/backgroundTablet.svg';
import home from '../../images/backgroundHome.svg';
import img from '../../images/backHomePage.svg';
import styled from '@emotion/styled';

export const ContentContainer = styled.div`
max-width: 320px;
padding: 40px 20px 52px 20px;
margin-left: auto;
margin-right: auto;


  @media screen and (min-width: 767.9px) {
    padding: 40px 32px 80px 32px;
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 120px 80px 120px;
    max-width: 1280px;
  }
`;

export const MainContainer = styled.div`
  /* max-width: 1280px; */
  min-width: 320px;
  background-image: url(${img});
  height: 100%;

  @media screen and (min-width: 320px) {
    // background-image: url(${mobile});
  }

  @media screen and (min-width: 768px) {
    // max-width: 768px;
    // width: 768px;
    // height:1024px;
    // background-image: url(${tablet});
  }

  @media screen and (min-width: 1280px) {
    // max-width: 1280px;
    // width: 1280px;
    // height: 850px;
    // background-image: url(${home});
  }
`;
