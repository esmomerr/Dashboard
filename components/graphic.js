"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Graphic() {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const options = {
      series: [{
        name: 'buil-ups',
        data: [42, 33, 75, 90, 15, 100, 93, 47, 77, 72, 36, 95],
        color: '#437EF7'
      },{
        name: 'interfaces',
        data: [34, 21, 50, 61, 10, 80, 62, 31, 53, 45, 23, 76],
        color: '#5CB1FF'
      }],
      chart: {
        type: 'bar',
        height: 272,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', "Feb", "Jan", "Mar"],
        axisBorder: {
          show: false // X ekseninin alt sınır çizgisini kaldırır
        },
        axisTicks: {
          show: false // X eksenindeki kenar çizgilerini kaldırır
        },
        labels: {
          style: {
            colors: '#9E9E9E' // X ekseni etiketlerinin rengini değiştirebilirsiniz
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            const percentages = ['0%', '25%', '75%', '100%'];
            const max = 200;
            return percentages[Math.round(value / (max / (percentages.length - 1)))];
          },
          style: {
            colors: '#9E9E9E' // Y ekseni etiketlerinin rengini değiştirebilirsiniz
          }
        },
        axisBorder: {
          show: false // Y ekseninin sağ sınır çizgisini kaldırır
        },
        axisTicks: {
          show: false // Y eksenindeki kenar çizgilerini kaldırır
        },
        crosshairs: {
          show: false // Kılavuz çizgilerini kaldırır
        }
      },
      grid: {
        show: false // Kılavuz çizgilerini kaldırır
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        itemMargin: {
          horizontal: 10,
          vertical: 0
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        enabled: false
      }
    };
    
    setChartOptions(options);
  }, []);

  return (
    <div>
      {chartOptions && <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={272} />}
    </div>
  );
}
