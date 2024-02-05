document.addEventListener('DOMContentLoaded', () => {
  const chart = Highcharts.chart('container', {
    credits: {
      enabled: false
    },
    chart: {
      type: 'areaspline',
      zoomType: 'xy'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      valueSuffix: '°F',
      // useHTML: true,
      // headerFormat: '<b>{point.key}</b><br>',
      // pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br>',
      // pointFormatter: function () {
      //   return `${this.series.name}: ${this.y}`
      // },
      // formatter: function () {
      //   return `${this.series.name}: ${this.y}`
      // }
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
      backgroundColor: '#fff',
      shadow: true,
      shadowBlur: 10,
      shadowOffsetX: 10,
      shadowOffsetY:10,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      // style: {
      //   color: 'red'
      // }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Temperature'
      }
    },
    series: [
      {
        name: 'Tokyo',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        // zones: [
        //   {
        //     value: 50,
        //     color: '#FF0000'
        //   },
        //   {
        //     value: 100,
        //     color: '#00FF00'
        //   },
        //   {
        //     value: 150,
        //     color: '#0000FF'
        //   }
        // ]
      },
      {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
      },
      {
        name: 'London',
        negetiveColor: '#FF0000',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
      }
    ]
  })
})