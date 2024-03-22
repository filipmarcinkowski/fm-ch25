'use strict';
const chart = document.querySelector('.chart__container');
const URL = './data.json';

const chartData = async function () {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    myChart(data);
  } catch (err) {
    console.error(err);
  }
};

chartData();

const myChart = function (data) {
  let highestValue = 0;
  let highestValueDay;

  data.forEach(function (data, i) {
    const html = `
            <li class="day__box">
                <p class="day__amount hidden">$${data.amount}</p>
                <div class="day__amount-chart day-${i}">&nbsp;</div>
                <p class="day-name text">${data.day}</p>
            </li>
                `;

    chart.insertAdjacentHTML('beforeend', html);

    const dayChart = document.querySelector(`.day-${i}`);
    dayChart.style.height = `${data.amount / 4}rem`;

    if (data.amount > highestValue) {
      highestValue = data.amount;
      highestValueDay = dayChart;
    }
  });

  highestValueDay.classList.add('highest');

  // HOVER AND SHOW VALUES

  const columns = document.querySelectorAll('.day__amount-chart');

  const showValue = function () {
    const value = this.parentElement.querySelector('.day__amount');
    value.classList.remove('hidden');
  };
  const hideValue = function () {
    const value = this.parentElement.querySelector('.day__amount');
    value.classList.add('hidden');
  };

  columns.forEach(function (column) {
    column.addEventListener('mouseover', showValue);
    column.addEventListener('mouseout', hideValue);
  });
};
