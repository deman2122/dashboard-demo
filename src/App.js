import React, { Component } from 'react';
import loadAPIservice from './Service/Service';
import Loadable from 'react-loadable';

const Chart1 = Loadable({
  loader: () => import('./Containers/Chart1'),
  loading() {
    return <div>Loading...</div>;
  }
});
const Chart2 = Loadable({
  loader: () => import('./Containers/Chart2'),
  loading() {
    return <div>Loading...</div>;
  }
});
const Chart3 = Loadable({
  loader: () => import('./Containers/Chart3'),
  loading() {
    return <div>Loading...</div>;
  }
});

class App extends Component {
  state = {
    jsonKeys: [],
    jsonValues: []
  };

  componentWillMount() {
    loadAPIservice
      .getIncidentsData()
      .then(res => {
        const jsonKeys = Object.keys(res.data);
        const jsonValues = Object.values(res.data);
        this.setState({ jsonKeys, jsonValues });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { jsonKeys, jsonValues } = this.state;
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <Chart1 keys={jsonKeys} values={jsonValues} />
          </div>
          <div className='col-md-6'>
            <Chart2 keys={jsonKeys} values={jsonValues} />
          </div>
          <div className='col-md-12'>
            <Chart3 keys={jsonKeys} values={jsonValues} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
