import s from './HomePage.module.css';
// import { Background } from './HomePage.styled';

const HomePageView = () => {
  return (
    <>
      <div className={s.background}>
        <div className={s.title}>
          <h1 className={s.titleWord}>Kapu
            <span className={s.titleLetter}>
              $
            </span>
            ta
          </h1>
          <p className={s.titleText}>
            smart finance
          </p>
        </div>

      </div>
    </>
  );
};

export default HomePageView;
