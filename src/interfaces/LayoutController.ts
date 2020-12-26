import ComponentData from './ComponentData';
import LayoutComposition from './LayoutComposition';
import LayoutConfig from './LayoutConfig';
import LayoutSetting from './LayoutSetting';

class LayoutController<SettingType extends LayoutSetting> {
  layout: LayoutComposition<LayoutSetting>[];

  constructor(layoutConfig: LayoutConfig<SettingType>, data: ComponentData[]) {
    if (layoutConfig.config.length !== data.length) {
      throw new Error('config and data do not match in length');
    }

    this.layout = layoutConfig.config.map((setting, index): LayoutComposition<SettingType> => ({
      setting,
      data: data[index],
    }));
  }
}

export default LayoutController;
