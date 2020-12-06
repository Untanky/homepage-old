import Layout from "~/components/layouts";
import ComponentData from "./ComponentData";
import LayoutConfig from "./layouts/LayoutConfig";

class LayoutData<SettingType> {
  layout: Object[];

  constructor(layoutConfig: LayoutConfig<SettingType>, data: ComponentData[]) {
    if (layoutConfig.config.length !== data.length) {
      throw new Error('config and data do not match in length');
    }

    this.layout = layoutConfig.config.map((setting, index) => ({
      setting,
      data: data[index],
    }));
  }
}

export default LayoutData;
