import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartDisplay from '../Components/ChartDisplay';

class Chart1 extends Component {
  state = {
    options: {},
    years: []
  };

  initialRender = () => {
    const { keys, values } = this.props;
    const years = keys;
    let p0sum = [];
    let p1sum = [];

    for (let i = 0; i < values.length; i++) {
      let y = Object.values(values[i][0]);
      let sum0 = 0;
      let sum1 = 0;
      for (let j = 0; j < y.length; j++) {
        sum0 += y[j].P0;
        sum1 += y[j].P1;
        if (j === y.length - 1) {
          p0sum.push(sum0);
          p1sum.push(sum1);
        }
      }
    }

    let options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Volume of P0/P1 by month'
      },
      xAxis: {
        categories: years
      },
      yAxis: {
        title: {
          text: 'Incidents Raised'
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [
        {
          name: 'P0',
          marker: {
            symbol: 'square'
          },
          data: p0sum
        },
        {
          name: 'P1',
          marker: {
            symbol: 'diamond'
          },
          data: p1sum
        }
      ]
    };

    this.setState({
      options,
      years
    });
  };

  componentWillMount() {
    this.initialRender();
  }

  handleChange = e => {
    const { values } = this.props;
    const { years } = this.state;
    const dropDownOption = e.target.value;
    let index = 0;
    console.log(dropDownOption);
    if (dropDownOption === 'All') {
      this.initialRender();
    }

    for (let i = 0; i < years.length; i++) {
      if (years[i] === dropDownOption) index = i;
    }

    const y = Object.values(values[index][0]);

    const P0 = y.map(item => item.P0);
    const P1 = y.map(item => item.P1);

    const newOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Volume of P0/P1 by month'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      yAxis: {
        title: {
          text: 'Incidents Raised'
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [
        {
          name: 'P0',
          marker: {
            symbol: 'square'
          },
          data: P0
        },
        {
          name: 'P1',
          marker: {
            symbol: 'diamond'
          },
          data: P1
        }
      ]
    };

    this.setState({
      options: newOptions
    });
  };
  render() {
    const { options, years } = this.state;

    return (
      <ChartDisplay
        options={options}
        years={years}
        handleChange={this.handleChange}
      />
    );
  }
}

Chart1.propTypes = {
  jsonKeys: PropTypes.array,
  jsonValues: PropTypes.array
};

export default Chart1;
