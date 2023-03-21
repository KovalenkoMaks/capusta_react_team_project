import s from './HomePage.module.css';
// import { FirstSection } from './HomePage.styled';

const HomePageView = () => {
  return (
    <>
      <div className={s.firstSection}>
        <div className={s.bcgImage}></div>
        <div className={s.imgText}></div>
      </div>
      <div className={s.bcgImageBottom}></div>
    </>
  );
};

export default HomePageView;
