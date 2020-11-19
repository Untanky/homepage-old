import { DateTime } from 'luxon';

const formatDateString = (
  from: DateTime,
  to: DateTime | null,
  active: boolean | null,
): string => {
  const dateFormat = { month: 'long', year: 'numeric' };

  const nowString = active ? 'Now' : '';

  const fromString = from.toLocaleString(dateFormat);
  const toString = to !== null
    ? to.toLocaleString(dateFormat)
    : nowString;

  return `${fromString}${toString !== '' ? ' - ' : ''}${toString}`;
};

class TimelineElement {
  title: string;

  subtitle: string;

  date: string;

  active: boolean;

  description: string;

  constructor(
    title: string,
    subtitle: string,
    description: string,
    from: DateTime,
    to: DateTime | null,
    active: boolean | null,
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.active = active === null ? false : active;
    this.date = formatDateString(from, to, active);
  }
}

export default TimelineElement;
