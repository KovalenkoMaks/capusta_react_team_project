import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { getSuccessToken } from 'redux/auth/auth-selectors';
import { useState } from 'react';

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({ itemEl }) => {
  const itemSliceKeys = Object.keys(itemEl[1]).slice(1);
  const itemSliceValues = Object.values(itemEl[1]).slice(1);

  const maxValue = Math.max(...itemSliceValues);

  const [widthScreen, setWidthScreen] = useState(window.screen.width);

  const token = useSelector(getSuccessToken);

  useEffect(() => {
    const doResize = evt => {
      setWidthScreen(evt.target.outerWidth);
    };
    window.addEventListener('resize', doResize);
    return () => {
      window.removeEventListener('resize', doResize);
    };
  });

  const itemLabels = itemSliceKeys.map(item => {
    return item;
  });
  const itemData = itemSliceValues.map(item => {
    return item;
  });

  // const sortedItemData = itemData.sort((a, b) => a - b);

  useEffect(() => {
    if (!token) {
      return;
    }
  }, [token]);

  const optionsHorizontal = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    keepAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        right: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: function (_, context) {
          return context.dataset.data[context.dataIndex] + ` грн`;
        },
        anchor: 'end',
        offset: 10,
        align: 'top',
        padding: 0,
        display: true,
        color: '#52555F',
        font: {
          size: 10,
          letterSpacing: '0.02em',
          lineHeight: 1.2,
        },
      },
    },
    scales: {
      xAxes: {
        min: 0,
        max: maxValue,
        ticks: {
          stepSize: 10,
          display: false,
        },
        grid: {
          drawBorder: false,
          color: 'transparent',
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          drawBorder: false,
          color: 'transparent',
        },
        ticks: {
          padding: 0,
          mirror: true,
          labelOffset: -16,
          color: '#52555F',
          display: true,
          font: {
            size: 10,
            letterSpacing: '0.02em',
            lineHeight: 1.2,
          },
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    keepAspectRatio: false,
    layout: {
      padding: {
        top: 15,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: '',
      },
      datalabels: {
        formatter: function (_, context) {
          return context.dataset.data[context.dataIndex] + ` грн`;
        },
        anchor: 'end',
        offset: 0,
        padding: 0,
        align: 'end',
        display: true,
        color: 'black',
        labels: {
          title: {
            font: {
              size: 12,
              color: '#52555F',
            },
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          offset: false,
          color: 'transparent',
        },
        ticks: {
          padding: 0,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          font: {
            color: 'red',
            size: 12,
            lineHeight: 1.17,
          },
        },
      },
      y: {
        min: 0,
        max: maxValue,
        ticks: {
          display: false,
        },
        grid: {
          offset: false,
          color: '#F5F6FB',
          lineWidth: 2,
          drawBorder: false,
        },
        display: true,
      },
    },
  };

  const data = {
    labels: itemLabels,
    datasets: [
      {
        label: 'Price',
        data: itemData,
        backgroundColor: [' #FF751D', '#FFDAC0', '#FFDAC0'],
        borderRadius: 10,
        maxBarThickness: 38,
        barScale: 2,
        padding: 10,
      },
    ],
  };

  const dataHorizontal = {
    labels: itemLabels,
    datasets: [
      {
        label: 'Price',
        data: itemData,
        backgroundColor: [' #FF751D', '#FFDAC0', '#FFDAC0'],
        borderRadius: 10,
        maxBarThickness: 15,
        barScale: 2,
      },
    ],
  };

  return (
    <>
      {widthScreen <= 767 && (
        <div className={styles.chartWrapper}>
          <div className={styles.chartContainer}>
            <Bar
              options={optionsHorizontal}
              data={dataHorizontal}
              plugins={[ChartDataLabels]}
              id="Bar"
              style={{
                height: `calc(${itemSliceValues.length}*40px)`,
              }}
            />
          </div>
        </div>
      )}
      {widthScreen >= 768 && (
        <div className={styles.chartWrapper}>
          <div className={styles.chartContainer}>
            <Bar
              options={options}
              data={data}
              plugins={[ChartDataLabels]}
              id="Bar"
              style={{
                display: 'flex',
                height: '360px',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
