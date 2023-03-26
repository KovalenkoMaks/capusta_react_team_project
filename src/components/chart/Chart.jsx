import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

// import s from './Chart.styled.css';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: this.isMobile(window.innerWidth),
      data: [
        {
          name: null,
          price: null,
          currency: null,
        },
        ...this.mapData(props.data),
        {
          name: null,
          price: null,
          currency: null,
        },
      ],
    };
  }

  RenderCustomizedLabel = props => {
    const { x, y, width, index, data, isMobile } = props;
    const element = data[index];

    if (!element.name && !element.price && !element.currency) {
      return '';
    }
    let text = `${element.price} ${element.currency}`;

    if (!isMobile) {
      return (
        <text
          x={x + width / 2}
          y={y - 10}
          fill="#000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {text}
        </text>
      );
    }

    let detainsX = width - text.length * 3;
    if (detainsX < 150) {
      detainsX = 150;
    }

    return (
      <g>
        <text
          x={x + element.name.length * 3.5}
          y={y - 10}
          fill="#000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {element.name}
        </text>
        <text
          x={detainsX}
          y={y - 10}
          fill="#000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {text}
        </text>
      </g>
    );
  };

  RoundedRectData = (x, y, width, height, tlr, trr, brr, blr) => {
    let v = `${height - (tlr + blr)}`;
    if (v !== 0) {
      v = -v;
    }

    if (!width || !height || (width === 0 && height === 0) || v === tlr) {
      return '';
    }

    let h = `${width - (blr + brr)}`;
    if (h !== 0) {
      h = -h;
    }

    return `M${x + tlr},${y}\
      h${width - (tlr + trr)}\
      a${trr},${trr} 0 0 1 ${trr},${trr}\
      v${height - (trr + brr)}\
      a${brr},${brr} 0 0 1 -${brr},${brr}\
      h${h}\
      a${blr},${blr} 0 0 1 -${blr},-${blr}\
      v${v}\
      a${tlr},${tlr} 0 0 1 ${tlr},-${tlr}\
      z`;
  };

  TriangleBar = props => {
    const { fill, x, y, width, height, isMobile } = props;

    let dValue = this.RoundedRectData(x, y, width, height, 10, 10, 0, 0);
    if (isMobile) {
      dValue = this.RoundedRectData(x, y, width, height, 0, 10, 10, 0);
    }

    return <path d={dValue} stroke="none" fill={fill} />;
  };

  isMobile(width) {
    return width <= 320;
  }

  updateDimensions = () => {
    this.setState({ isMobile: this.isMobile(window.innerWidth) });
  };

  mapData = arg => {
    let result = [];
    if (!arg || !arg?.length) {
      return result;
    }

    Object.entries(arg[1])
      .filter(it => it[0] !== 'total')
      .forEach(elem => {
        result.push({
          name: elem[0],
          price: elem[1],
          currency: 'UAH',
        });
      });
    return result;
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps !== this.props) {
      this.setState({
        isMobile: this.isMobile(window.innerWidth),
        data: [...this.mapData(this.props.data)],
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    let chartAxis;
    const barSize = this.state.isMobile ? 30 : 40;
    const height = this.state.isMobile ? 470 : 420;

    if (this.state.isMobile) {
      chartAxis = (
        <>
          <CartesianGrid strokeDasharray="1" horizontal={false} />
          <XAxis type="number" hide={true} />
          <YAxis type="category" dataKey="name" hide={true} />
        </>
      );
    } else {
      chartAxis = (
        <>
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis dataKey="name" />
        </>
      );
    }

    return (
      <div
        style={{ width: '100%', height: `${height}px`, background: 'white' }}
      >
        <ResponsiveContainer>
          <BarChart
            data={this.state.data}
            margin={{
              top: 20,
              right: 0,
              left: 30,
              bottom: 5,
            }}
            layout={this.state.isMobile ? 'vertical' : 'horizontal'}
          >
            {chartAxis}
            <Bar
              barSize={barSize}
              dataKey="price"
              fill="rgb(255 176 88)"
              shape={<this.TriangleBar isMobile={this.state.isMobile} />}
              label={
                <this.RenderCustomizedLabel
                  data={this.state.data}
                  isMobile={this.state.isMobile}
                />
              }
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
