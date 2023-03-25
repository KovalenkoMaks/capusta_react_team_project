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
        ...props.data,
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

    if (isMobile) {
      let text = `${element.price} ${element.currency}`;
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
            x={width - text.length * 3}
            y={y - 10}
            fill="#000"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {text}
          </text>
        </g>
      );
    }

    return (
      <text
        x={x + width / 2}
        y={y - 10}
        fill="#000"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {element.price} {element.currency}
      </text>
    );
  };

  RoundedRectData = (x, y, width, height, tlr, trr, brr, blr) => {
    let v = `${height - (tlr + blr)}`;
    if (v !== 0) {
      v = -v;
    }

    if ((width === 0 && height === 0) || v === tlr) {
      return '';
    }

    if (!width || !height) {
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

    if (isMobile) {
      return (
        <path
          d={this.RoundedRectData(x, y, width, height, 0, 10, 10, 0)}
          stroke="none"
          fill={fill}
        />
      );
    }
    return (
      <path
        d={this.RoundedRectData(x, y, width, height, 10, 10, 0, 0)}
        stroke="none"
        fill={fill}
      />
    );
  };

  isMobile(width) {
    return width < 900;
  }

  updateDimensions = () => {
    this.setState({ isMobile: this.isMobile(window.innerWidth) });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    let chartBody;

    if (this.state.isMobile) {
      chartBody = (
        <>
          <CartesianGrid strokeDasharray="1" horizontal={false} />
          <XAxis type="number" hide={true} />
          <YAxis type="category" dataKey="name" hide={true} />
          <Bar
            barSize={30}
            dataKey="price"
            fill="rgb(255 176 88)"
            shape={<this.TriangleBar isMobile={this.state.isMobile} />}
            label={
              <this.RenderCustomizedLabel
                isMobile={this.state.isMobile}
                data={this.state.data}
              />
            }
          ></Bar>
        </>
      );
    } else {
      chartBody = (
        <>
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis dataKey="name" />
          <Bar
            dataKey="price"
            fill="rgb(255 176 88)"
            shape={<this.TriangleBar isMobile={this.state.isMobile} />}
            label={<this.RenderCustomizedLabel data={this.state.data} />}
          ></Bar>
        </>
      );
    }

    return (
      <div style={{ width: '100%', height: '500px' }}>
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
            {chartBody}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
