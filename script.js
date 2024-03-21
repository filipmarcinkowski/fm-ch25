'use strict';

const dayName = document.querySelectorAll('.day-name');
const dayAmount = document.querySelectorAll('.day__amount');
const dayChart = document.querySelectorAll('.day__amount-chart');

const URL = './data.json';

const chartData = async function () {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
};

chartData();
