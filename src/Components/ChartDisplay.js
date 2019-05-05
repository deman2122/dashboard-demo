import React, { Component, Fragment } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/offline-exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);

class ChartDisplay extends Component {
  constructor() {
    super();
    this.chartComponent = React.createRef();
  }

  render() {
    const { options, years, handleChange } = this.props;

    return (
      <Fragment>
        <select onChange={handleChange}>
          <option>All</option>
          {years.map(year => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={this.chartComponent}
        />
      </Fragment>
    );
  }
}

ChartDisplay.propTypes = {
  options: PropTypes.object.isRequired,
  years: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ChartDisplay;
