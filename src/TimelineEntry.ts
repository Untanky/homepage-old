import { DateTime } from 'luxon';

const DATE_FORMAT = { month: 'long', year: 'numeric' };

const formatToString = (active: boolean, to?: DateTime): string => {
  if (active) {
    return 'now'; // TODO: localize
  }

  if (to) {
    return to.toLocaleString(DATE_FORMAT); // TODO: localize
  }

  return '';
};

const formatDateString = (
  active: boolean,
  from: DateTime,
  to?: DateTime,
): string => {
  const fromString = from.toLocaleString(DATE_FORMAT); // TODO: localize
  const toString = formatToString(active, to);
  const optionalHyphen = toString !== '' ? ' - ' : '';

  return `${fromString}${optionalHyphen}${toString}`;
};

class TimelineElement {
  from: DateTime;

  to?: DateTime;

  date: string;

  active: boolean;

  constructor(
    from: DateTime,
    to?: DateTime,
    active?: boolean,
  ) {
    this.from = from;
    this.to = to;
    this.active = active || false;

    this.date = formatDateString(this.active, this.from, this.to);
  }
}

export default TimelineElement;
