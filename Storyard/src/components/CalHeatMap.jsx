/* eslint-disable react/prop-types */
import ReactApexChart from 'react-apexcharts';
import { generateUserData } from '../../util/generateUserHeatMap';

const HeatmapChart = () => {
  const options = {
    chart: {
      type: 'heatmap',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      heatmap: {
        radius: 2,
        colorScale: {
          ranges: [{
            from: 0,
            to: 2,
            color: '#000000'
          }]
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#62fe7a'],
    xaxis: {
      type: 'category',
    },
    title: {
      text: 'Heatmap Chart',
      align: 'center',
      margin: 0,
      offsetY: 0,
      style: {
        fontSize: '0px',
      }
    }
  };

  const data = generateUserData(5, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);


  return (
    <ReactApexChart style={{innerHeight:'100px'}} options={options} series={data} type="heatmap" height="250" />
  );
};

export default HeatmapChart;
