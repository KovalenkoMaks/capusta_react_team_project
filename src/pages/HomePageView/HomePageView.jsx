import s from './HomePage.module.css';

const HomePageView = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.firstSection}>
                    <div className={s.bcgImage}></div>
                    <div className={s.imgText}></div>
                </div>
                <div className={s.secondSection}>
                    <div className={s.bcgImageBottom}></div>
                </div>
            </div>
        </>
    );
};

export default HomePageView;