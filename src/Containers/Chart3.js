import React, { Component } from 'react';
import ChartDisplay from '../Components/ChartDisplay';
import PropTypes from 'prop-types';

class Chart3 extends Component {
  state = {
    options: {},
    years: []
  };

  initialRender = () => {
    const { keys, values } = this.props;
    const years = keys;
    let p0percentage = [];
    let p1percentage = [];

    for (let i = 0; i < values.length; i++) {
      let y = Object.values(values[i][0]);
      let sum0Closed = 0;
      let sum0Total = 0;
      let sum1Closed = 0;
      let sum1Total = 0;
      for (let j = 0; j < y.length; j++) {
        sum0Closed += y[j].P0 - y[j].P0Open;
        sum0Total += y[j].P0;
        sum1Closed += y[j].P1 - y[j].P1Open;
        sum1Total += y[j].P1;
        if (j === y.length - 1) {
          let per1 = (sum0Closed * 100) / sum0Total;
          p0percentage.push(per1);
          let per2 = (sum1Closed * 100) / sum1Total;
          p1percentage.push(per2);
        }
      }
    }

    let options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: '% within SLA by P0 and P1'
      },
      xAxis: {
        categories: years
      },
      yAxis: {
        title: {
          text: 'Percentage'
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true,
        valueDecimals: 2
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
          data: p0percentage
        },
        {
          name: 'P1',
          data: p1percentage
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
    } else {
      for (let i = 0; i < years.length; i++) {
        if (years[i] === dropDownOption) index = i;
      }

      const y = Object.values(values[index][0]);

      const P0 = y.map(item => ((item.P0 - item.P0Open) / item.P0) * 100);
      const P1 = y.map(item => ((item.P1 - item.P1Open) / item.P1) * 100);

      const newOptions = {
        chart: {
          type: 'spline'
        },
        title: {
          text: '% within SLA by P0 and P1'
        },
        xAxis: {
          categories: ['Jan', '', '', '', '', '', '', '', '', '', '', 'Dec']
        },
        yAxis: {
          title: {
            text: 'Percentage'
          }
        },
        tooltip: {
          crosshairs: true,
          shared: true,
          valueDecimals: 2
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
            data: P0
          },
          {
            name: 'P1',
            data: P1
          }
        ]
      };

      this.setState({
        options: newOptions
      });
    }
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

Chart3.propTypes = {
  jsonKeys: PropTypes.array,
  jsonValues: PropTypes.array
};

export default Chart3;
