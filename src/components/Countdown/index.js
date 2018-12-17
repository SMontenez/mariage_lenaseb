import React from 'react';

import './Countdown.css';

const ONE_DAY = 24 * 60 * 60 * 1000;
const WEDDING_DATE = new Date(2019, 8, 17);

function getNbDaysLeft() {
  const today = new Date();

  const daysLeft = Math.round(Math.abs((today.getTime() - WEDDING_DATE.getTime()) / ONE_DAY));
  return daysLeft;
}

const Countdown = () => (
  <div id="countdownContainer">
    <div id="countdown">
      Il reste <span id="daysLeft">{getNbDaysLeft()}</span> jours
    </div>
  </div>
);

export default Countdown;
