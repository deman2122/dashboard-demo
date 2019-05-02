import React, { Component } from 'react';
import Chart from './Components/Chart';

class App extends Component {
  state = {
    fetchedArray: [],
    options1: {
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
          data: []
        },
        {
          name: 'P1',
          marker: {
            symbol: 'diamond'
          },
          data: []
        }
      ]
    },
    options2: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Trend of Open Issues'
      },
      xAxis: {
        categories: []
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
          data: []
        },
        {
          name: 'P1',
          data: []
        }
      ]
    },
    options3: {
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
          data: []
        },
        {
          name: 'P1',
          marker: {
            symbol: 'diamond'
          },
          data: []
        }
      ]
    },
    options4: {
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
          data: []
        },
        {
          name: 'P1',
          marker: {
            symbol: 'diamond'
          },
          data: []
        }
      ]
    },
    years: [2017, 2018, 2019]
  };

  componentDidMount() {
    this.initialRender();
  }

  initialRender = () => {
    let fetchedArray,
      years = [];
    let initialOptions1 = {};
    let initialOptions2 = {};
    let p0sum_1 = [];
    let p1sum_1 = [];
    let p0sum_2 = [];
    let p1sum_2 = [];
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        years = Object.keys(data);
        fetchedArray = Object.values(data);

        for (let i = 0; i < fetchedArray.length; i++) {
          let y = Object.values(fetchedArray[i][0]);
          let sum0_1 = 0;
          let sum1_1 = 0;
          let sum0_2 = 0;
          let sum1_2 = 0;
          for (let j = 0; j < y.length; j++) {
            sum0_1 += y[j].P0;
            sum1_1 += y[j].P1;
            sum0_2 += y[j].P0Open;
            sum1_2 += y[j].P1Open;
            if (j === y.length - 1) {
              p0sum_1.push(sum0_1);
              p1sum_1.push(sum1_1);
              p0sum_2.push(sum0_2);
              p1sum_2.push(sum1_2);
            }
          }
        }

        initialOptions1 = {
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
              data: p0sum_1
            },
            {
              name: 'P1',
              marker: {
                symbol: 'diamond'
              },
              data: p1sum_1
            }
          ]
        };

        initialOptions2 = {
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
            headerFormat:
              '<span style="font-size:10px">{point.key}</span><table>',
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
              data: p0sum_2
            },
            {
              name: 'P1',
              data: p1sum_2
            }
          ]
        };

        this.setState({
          options1: initialOptions1,
          options2: initialOptions2,
          fetchedArray,
          years
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const { fetchedArray, years } = this.state;
    const { value } = e.target;
    let index = 0;

    if (value === 'All') {
      this.initialRender();
    }

    for (let i = 0; i < years.length; i++) {
      if (years[i] === value) index = i;
    }

    const y = Object.values(fetchedArray[index][0]);

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
    console.log(1);
    const { options1, options2, years } = this.state;
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <Chart
              options={options1}
              years={years}
              handleChange={this.handleChange}
            />
          </div>
          <div className='col-md-6'>
            <Chart
              options={options2}
              years={years}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
