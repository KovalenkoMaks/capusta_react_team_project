import css from './BgImage.module.css';

const BgImage = ({ type, children }) => {
  const bgType = css[`mainBg${type}`];

  return <div className={`${css.mainBg} ${bgType}`}>{children}</div>;
};

export default BgImage;