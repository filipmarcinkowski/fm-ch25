'use strict';

const day = document.querySelectorAll('.day__box');

const URL = './data.json';

const chartData = async function () {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);

    weekChart(data);
  } catch {
    console.error('error????? :(');
  }
};

chartData();

const weekChart = function (d) {
  day.forEach(function (el, i) {
    const dayAmount = el.querySelector('.day__amount');
    const dayChart = el.querySelector('.day__amount-chart');
    const dayName = el.querySelector('.day-name');

    dayChart.style.height = `${d[i].amount / 4}rem`;
    dayAmount.textContent = d[i].amount;
    dayName.textContent = d[i].day;
  });
};

const html = `
<li class="day__box">
            <p class="day__amount">${data.amount}</p>
            <div class="day__amount-chart">&nbsp;</div>
            <p class="day-name text">${data.day}</p>
          </li>
`;
