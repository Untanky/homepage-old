import LayoutSetting from '../interfaces/LayoutSetting';

interface GridSetting extends LayoutSetting {
  size: string;

  column: number;

  priority: number;

  title: string;

  component: string;

  dataId: number;

  classes: string[];
}

export default GridSetting;
