document.addEventListener('DOMContentLoaded', () => {
  const options = {
    chart: {
      type: 'column',
      zoomType: 'xy'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    yAxis: {
      title: {
        text: 'Temperature'
      }
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            enabled: false
          },
          yAxis: {
            title: {
              text: null
            }
          }
        }
      }]
    }
  };
  // fetch('./data.csv').then(res => res.text()).then(data => {
  //   options.data = {
  //     csv : data
  //   };
  //   console.log(options.data.csv);
  // }).then(() => {
  //   Highcharts.chart('container', options);
  // })
  options.data = {
    csvURL: 'http://127.0.0.1:5500/data.csv',
    enablePolling: true,
    pollInterval: 1000
  };
  Highcharts.chart('container', options);
})
