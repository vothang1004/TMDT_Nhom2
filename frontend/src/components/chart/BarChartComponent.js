import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChartComponent({ bills }) {
  const { list: products } = useSelector((state) => state.product);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = products.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        // data: bills.map((item) => {
        //   const details = item.detail;
        //   return details.reduce((acc, detail) => acc + detail.price, 0);
        // }),
        data: [200, 500, 400],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };
  console.log('bills bar => ', bills);
  return <Bar options={options} data={data} />;
}

export default BarChartComponent;
