import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Chart extends Component {
  render() {
    console.log(2);
    const { options, years, handleChange } = this.props;
    return (
      <div>
        <select onChange={handleChange}>
          <option>All</option>
          {years.map(year => (
            <option key={year}>{year}</option>
          ))}
        </select>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default Chart;
