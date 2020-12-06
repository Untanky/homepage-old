import ComponentData from '../ComponentData';
import TimelineElement from './TimelineElement';

interface TimelineList extends ComponentData {
  list: Array<TimelineElement>;
}

export default TimelineList;
