export interface StrapiUnifiedArrayModel<T, PropertyName extends string> {
  data: Array<{
    attributes: {
      [P in PropertyName]: T
    }
  }>
}

export const mapFromStrapiArray = <T, PropertyName extends string>(model: StrapiUnifiedArrayModel<T, PropertyName>, propertyName: PropertyName): T[] => {
  return model.data.map((value) => value.attributes[propertyName]);
}
