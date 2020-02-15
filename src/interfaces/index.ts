export enum Freq {
  YEARLY,
  MONTHLY,
  WEEKLY,
  DAILY
};

export interface IRruleGenerator {
  freq: Freq,
  endDate: Date,
  startDate: Date,
  count?: number,
  interval: number
}
