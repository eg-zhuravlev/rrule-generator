import {
  IRruleGenerator
} from './interfaces';

import { DateTime } from './DateTime';

export default function rruleGenerator ({
  freq,
  startDate,
  endDate,
  interval
}: IRruleGenerator) {
  const dateTime = new DateTime(startDate);
  const dates = [];

  while (true) {
    dateTime.add(freq, interval);
    const date = dateTime.getDate();

    if (date.getTime() > endDate.getTime()) {
      break;
    }

    dates.push(date);
  }
};

