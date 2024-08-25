"use client"
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function IntuitiveGraphic() {
    useEffect(() => {
        var options = {
            series: [{
                name: 'Sales',
                data: [2, 0, 4, 17, 12, 19, 3, 4, 7, 2, 5]
            }],
            chart: {
                height: 120,
                type: 'line',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                parentHeightOffset: 0, // Grafik boyutunu optimize et
                padding: {
                    right: 0 // Sağdaki boşluğu kaldır
                }
            },
            stroke: {
                width: 5,
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            },
            tooltip: {
                enabled: false
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#FDD835'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#intuitive-chart"), options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return <div id="intuitive-chart" style={{ width: '140px' }}></div>;
}
