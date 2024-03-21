'use strict';

const day = document.querySelectorAll('.day__box');

const URL = './data.json';

const chartData = async function () {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);

    myChart(data);
  } catch (err) {
    console.error(err);
  }
};

chartData();

const chart = document.querySelector('.chart__container');

const myChart = function (data) {
  let highestValue = 0;
  let highestValueDay;

  data.forEach(function (data, i) {
    const html = `
            <li class="day__box">
                <p class="day__amount">${data.amount}</p>
                <div class="day__amount-chart day-${i}">&nbsp;</div>
                <p class="day-name text">${data.day}</p>
            </li>
                `;

    chart.insertAdjacentHTML('beforeend', html);

    const dayChart = document.querySelector(`.day-${i}`);
    dayChart.style.height = `${data.amount / 4}rem`;
  });

  //   if (data.amount > highestValue) {
  //     highestValue = data.amount;
  //     highestValueDay = data;
  //   }

  //   const max = document.querySelector('.day__amount-chart');
  //   max.classList.add('highest');
};
