import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts'

export const Home = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: 6,
        color: 'white'
      },
      title: {show: false},
      legend: {show: false},
      xAxis: {
        data: ['1','2','3', '4', '5','6','7', '8','9'],
        axisLabel: {
          fontSize: 6
        }
      },
      yAxis: {
        splitLine: {show: false},
        axisLabel: {
          fontSize: 6
        }
      },
      grid: {
        x: 20,
        y: 10,
        x2: 0,
        y2: 20
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [10, 20, 30, 40, 30, 11, 26, 90, 71]
      }]
    })
  }, [])
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}} />
      <main>
        <section className="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div className="chart" ref={divRef}></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
