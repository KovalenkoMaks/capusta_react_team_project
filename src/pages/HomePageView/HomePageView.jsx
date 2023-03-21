import LogIn from 'components/logIn/Login';
import s from './HomePage.module.css';
// import { Container } from './HomePage.styled';

const HomePageView = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.firstSection}>
          <div className={s.bcgImage}></div>
          <div className={s.imgText}>{/* <LogIn /> */}</div>
        </div>
        <div className={s.secondSection}>
          <div className={s.bcgImageBottom}></div>
        </div>
      </div>
    </>
  );
};

export default HomePageView;
