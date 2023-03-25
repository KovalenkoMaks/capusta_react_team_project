// import { Statisticts } from 'components/asd/NavStatis/Statisticts/Statisticts';
// import { NavStatis } from 'components/asd/NavStatis/NavStatis';
import s from './HomePage.module.css';
// import { Background } from './HomePage.styled';
// import Chart from 'components/chart/Chart';

const HomePageView = () => {
  // const chartData = [
  //   {
  //     name: 'Pork',
  //     price: 1000,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Beef',
  //     price: 1000,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Chiken',
  //     price: 800,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Fish',
  //     price: 600,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Panini',
  //     price: 220,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Cofee',
  //     price: 350,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Beef',
  //     price: 1000,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Chiken',
  //     price: 800,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Fish',
  //     price: 600,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Panini',
  //     price: 220,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Cofee',
  //     price: 350,
  //     currency: "UAH"
  //   },
  //   {
  //     name: 'Spaghetti',
  //     price: 230,
  //     currency: "UAH"
  //   }
  // ];

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
      {/* <Chart data={chartData} /> */}
      {/* <NavStatis /> */}
    </>
  );
};

export default HomePageView;
