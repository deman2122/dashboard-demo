import React from 'react';
import Chart1 from './Components/Chart1';
import Chart2 from './Components/Chart2';
import Chart3 from './Components/Chart3';
import Chart4 from './Components/Chart4';

class App extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <Chart1 />
          </div>
          <div className='col-md-6'>
            <Chart2 />
          </div>
          <div className='col-md-6'>
            <Chart3 />
          </div>
          <div className='col-md-6'>
            <Chart4 />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
