import ComponentData from './ComponentData';
import LayoutSetting from './LayoutSetting';

interface LayoutComposition<SettingType extends LayoutSetting> {
  setting: SettingType;

  data: ComponentData;
}

export default LayoutComposition;
