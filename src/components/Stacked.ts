/* eslint-disable no-unused-vars */
import ComponentData from '../interfaces/ComponentData';
import LayoutComposition from '../interfaces/LayoutComposition';

export enum StackDirection {
  Vertical = 'VERTICAL',
  Horizontal = 'HORIZONTAL',
}

interface Stacked extends ComponentData {
  direction: StackDirection;
  componentData: LayoutComposition<any>[];
  classes: string[];
}

export default Stacked;
