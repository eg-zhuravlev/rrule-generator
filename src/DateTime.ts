import {Freq} from './interfaces';

const daysInMonths = [
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];

export class DateTime {
  protected year: number;
  protected month: number;
  protected day: number;

  constructor (date: Date) {
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.day = date.getDate();
  }

  addYears (years: number) {
    this.year += years;
  }

  addMonths (months: number) {
    this.month += months
    if (this.month > 11) {
      this.addYears(1);
      this.month = 0;
    }
  }

  addWeekly (interval: number) {
    this.addDays(interval * 7);
  }

  addDays (days: number) {
    this.day += days;

    if (this.day > daysInMonths[this.month]){
      this.day = this.day - daysInMonths[this.month];
      this.addMonths(1);
    }
  }

  getDate () {
    return new Date(this.year, this.month, this.day);
  }

  add (freq: Freq, interval: number) {
    switch (freq) {
      case Freq.YEARLY:
        return this.addYears(interval)
      case Freq.MONTHLY:
        return this.addMonths(interval)
      case Freq.WEEKLY:
        return this.addDays(interval)
      case Freq.DAILY:
        return this.addDays(interval)
    }
  }
}
