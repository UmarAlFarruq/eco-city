import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Murojatlar",
          data: [731, 940, 728, 951, 542, 689, 940],
        },
        {
          name: "Tugallandi",
          data: [511, 432, 645, 632, 434, 52, 841],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Murojatlar diogrammasi'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [30]
        },
        labels: ['01 Jan 2023', '02 Feb 2023', '03 Mar 2023', '04 Apr 2023', '05 May 2023', '06 Jun 2023','06 Jul 2023'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'Murojatlar soni',
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Murojatlar soni'
          }
        }]
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
          width={'1220px'}
        />
      </div>
    );
  }
}

export default ApexChart;
