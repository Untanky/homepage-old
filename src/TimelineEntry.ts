import { DateTime } from 'luxon';

interface TimelineElement {
  from: DateTime;

  to?: DateTime;

  active: boolean;
}

export default TimelineElement;
