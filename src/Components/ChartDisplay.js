import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

class ChartDisplay extends Component {
  render() {
    const { options, years, handleChange } = this.props;
    return (
      <div>
        <select onChange={handleChange}>
          <option>All</option>
          {years.map(year => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

ChartDisplay.propTypes = {
  options: PropTypes.object.isRequired,
  years: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ChartDisplay;
