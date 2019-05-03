import React, { Component } from 'react';
import ChartDisplay from '../Components/ChartDisplay';
import PropTypes from 'prop-types';

class Chart2 extends Component {
  state = {
    options: {},
    years: []
  };

  initialRender = () => {
    const { keys, values } = this.props;
    const years = keys;
    let p0OpenSum = [];
    let p1OpenSum = [];

    for (let i = 0; i < values.length; i++) {
      let y = Object.values(values[i][0]);
      let sum0Open = 0;
      let sum1Open = 0;
      for (let j = 0; j < y.length; j++) {
        sum0Open += y[j].P0Open;
        sum1Open += y[j].P1Open;
        if (j === y.length - 1) {
          p0OpenSum.push(sum0Open);
          p1OpenSum.push(sum1Open);
        }
      }
    }

    let options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Trend of Open Issues'
      },
      xAxis: {
        categories: years
      },
      yAxis: {
        title: {
          text: 'No. of open incidents'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'P0',
          data: p0OpenSum
        },
        {
          name: 'P1',
          data: p1OpenSum
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

    const P0Open = y.map(item => item.P0Open);
    const P1Open = y.map(item => item.P1Open);

    const newOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Trend of Open Issues'
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
          text: 'No. of open incidents'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'P0',
          data: P0Open
        },
        {
          name: 'P1',
          data: P1Open
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

Chart2.propTypes = {
  jsonKeys: PropTypes.array,
  jsonValues: PropTypes.array
};

export default Chart2;
