/* eslint-disable no-undef */
import { DateTime } from 'luxon';
import TimelineEntry from '../../src/TimelineEntry';

const FEBRUARY_2020 = DateTime.fromObject({ month: 2, year: 2020 });
const NOVEMBER_2020 = DateTime.fromObject({ month: 11, year: 2020 });

describe('TimelineEntry', () => {
  it('should put "Now" in date when active and to date is specified', () => {
    const entry = new TimelineEntry(FEBRUARY_2020, NOVEMBER_2020, true);

    expect(entry.active).toBe(true);
    expect(entry.date).toBe('February 2020 - now');
  });

  it('should put "Now" in date when active and to date is not specified', () => {
    const entry = new TimelineEntry(FEBRUARY_2020, undefined, true);

    expect(entry.active).toBe(true);
    expect(entry.date).toBe('February 2020 - now');
  });

  it('should put to date string in date when date is specified and is inactive', () => {
    const entry = new TimelineEntry(FEBRUARY_2020, NOVEMBER_2020, false);

    expect(entry.active).toBe(false);
    expect(entry.date).toBe('February 2020 - November 2020');
  });

  it('should only put from date in date when date is not specified and is inactive', () => {
    const entry = new TimelineEntry(FEBRUARY_2020, undefined, false);

    expect(entry.active).toBe(false);
    expect(entry.date).toBe('February 2020');
  });
});
