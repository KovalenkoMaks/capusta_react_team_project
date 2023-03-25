import s from './HomePage.module.css';

const HomePageView = () => {
  return (
    <>
      <div className={s.title}>
        <h1 className={s.titleWord}>
          Kapu
          <span className={s.titleLetter}>$</span>
          ta
        </h1>
        <p className={s.titleText}>smart finance</p>
      </div>
    </>
  );
};

export default HomePageView;
