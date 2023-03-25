import Style from './SpendingMonStat.module.css';
import { Icons } from '../Icons/Icons';
import { ReportsItemsCard } from '../ReportsItemsCard/ReportsItemsCard';


export const SpendingMoneyStatisticts = ({
  handelClickOnCategory,
  handelArrow,
  arrow,
  currentId,
  exCate,
  inCate,
}) => {
  return (
    <>
      <div className={Style.spend_stat}>
        <div className={Style.spend_statPosition}>
          <div className={Style.spend_stat_left} onClick={handelArrow}>
            <Icons
              name="arrow-left"
              className="Style.spend_statSvg"
              color="#ff751d"
              width="6"
              height="14"
            />
          </div>

          {arrow ? (
            inCate[0] ? (
              <p className={Style.spend_statTextBig}>EXPENSES</p>
            ) : (
              <span className={Style.list_spendTextNo}>REPORTS EXAMPLE</span>
            )
          ) : exCate[0] ? (
            <p className={Style.spend_statTextBig}>INCOMES</p>
          ) : (
            <span className={Style.list_spendTextNo}>REPORTS EXAMPLE</span>
          )}
          <div className={Style.spend_stat_right} onClick={handelArrow}>
            <Icons
              name="arrow-right"
              className="Style.spend_statSvg"
              color="#ff751d"
              width="6"
              height="14"
            />
          </div>
        </div>
        <div>
          {arrow ? (
            <table>
              <tbody className={Style.list_spend}>
                {!!exCate.length ? (
                  exCate.map((item, i) => {
                    return (
                      <ReportsItemsCard
                        id={i}
                        key={i}
                        currentItem={currentId}
                        total={item[1].total}
                        category={item[0]}
                        item={item}
                        handelClickOnCategory={handelClickOnCategory}
                      />
                    );
                  })
                ) : (
                  <>
                    <tr className={Style.example_tr}>
                      <td className={Style.imageExample_one}></td>
                      <td className={Style.imageExample_two}></td>
                      <td className={Style.imageExample_three}></td>
                      <td className={Style.imageExample_for}></td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          ) : (
            <table>
              <tbody className={Style.list_spend}>
                {!!inCate.length ? (
                  inCate.map((item, i) => {
                    return (
                      <ReportsItemsCard
                        id={i}
                        key={i}
                        currentItem={currentId}
                        total={item[1].total}
                        category={item[0]}
                        item={item}
                        handelClickOnCategory={handelClickOnCategory}
                      />
                    );
                  })
                ) : (
                  <tr className={Style.example_tr}>
                    <td className={Style.imageExample_one}></td>
                    <td className={Style.imageExample_two}></td>
                    <td className={Style.imageExample_three}></td>
                    <td className={Style.imageExample_for}></td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
