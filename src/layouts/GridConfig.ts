import GridSetting from './GridSetting';
import LayoutConfig from '../interfaces/LayoutConfig';

class GridConfig implements LayoutConfig<GridSetting> {
  configType: String = 'GRID';

  version: String = '0.1.0';

  component: String = 'grid-layout';

  config: GridSetting[];

  constructor() {
    this.config = [
      {
        size: 'SMALL',
        column: 1,
        priority: 3,
        title: 'Card title',
        component: 'stacked-text',
        dataId: 0,
        classes: [],
      },
      {
        size: 'SMALL',
        column: 2,
        priority: 1,
        title: 'Card title',
        component: 'full-image',
        dataId: 1,
        classes: ['p-0'],
      },
      {
        size: 'MEDIUM',
        column: 3,
        priority: 2,
        title: 'Card title',
        component: 'stacked-text',
        dataId: 2,
        classes: [],
      },
    ];
  }
}

export default GridConfig;
