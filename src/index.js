/* eslint no-unused-vars: 0 */
import _ from 'lodash'; // eslint-disable-line
import sendApi from './send.js';
import populate from './populate.js';
import './style.css';
import call from './get.js';
import error from './error.js';
import sort from './sort.js';

const form = document.getElementById('form');
const sub = document.getElementById('submit');
const ref = document.getElementById('refresh');

const getArr = async () => {
  const arr = await call();
  const res = arr.result;
  sort(res, 'score').reverse();
  return res;
};

sub.addEventListener('click', async () => {
  const name = form.name.value;
  const score = form.score.value;
  if (score.match(/^[0-9]+$/) == null) {
    error('Invalid input!', 'red');
  } else {
    error('Score added succesfully!', 'green');
    await sendApi(name, score);
    form.name.value = '';
    form.score.value = '';
    populate(await getArr());
  }
});

ref.addEventListener('click', async () => {
  populate(await getArr());
});

document.addEventListener('DOMContentLoaded', async () => {
  populate(await getArr());
});