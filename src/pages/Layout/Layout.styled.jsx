import imgHome from '../../images/backHomePage.png';
import imgTablet from '../../images/backTabletPage.png';
import imgMobile from '../../images/backMobilePage.svg';
import styled from '@emotion/styled';

export const ContentContainer = styled.div`
  width: 100%;
  max-width:1280px;

  @media screen and (min-width: 320px) {
    padding: 16px 20px 52px 20px;
    min-width: 320px;
    background-image: url(${imgMobile});
    background-size: cover;
    background-size: 100% 100%;
  }

  @media screen and (min-width: 768px) {
    /* height: 1234px; */
    width: 768px;
    padding: 40px 91px 80px 91px;
    background: url(${imgTablet});
    background-size: cover;
    background-size: 100% 100%;
  }
  
  @media screen and (min-width: 1280px) {
    padding: 40px 123px 80px 123px;
    width: 1280px;
    background: url(${imgHome}) no-repeat;
    background-size: cover;
    background-size: 100% 100%;
  }
`;
