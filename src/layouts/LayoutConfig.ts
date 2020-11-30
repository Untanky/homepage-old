type LayoutConfig<SettingType> = {
  configType: String;

  version: String;

  component: String;

  config: SettingType[];
}

export default LayoutConfig;
