import GridSetting from './GridSetting';

class GridConfig {
  configType: String = 'GRID';

  version: String = '0.1.0';

  component: String = 'grid-layout';

  config: GridSetting[];

  constructor() {
    this.config = [
      {
        size: 'SMALL',
        column: 1,
        priority: 1,
        title: 'Card title',
        component: 'stacked-text',
        dataId: 0,
      },
    ];
  }
}

export default GridConfig;
