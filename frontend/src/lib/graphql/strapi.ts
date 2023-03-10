export interface StrapiUnifiedModel<T> {
  data: {
    attributes: T
  }
}

export interface StrapiUnifiedArrayModel<T> {
  data: Array<{
    attributes: T
  }>
}

export type StrapiUnifiedArrayWithPropModel<T, PropertyName extends string> = StrapiUnifiedArrayModel<{ [P in PropertyName]: T }>;

export const mapFromStrapiArray = <T, PropertyName extends string>(model: StrapiUnifiedArrayWithPropModel<T, PropertyName>, propertyName: PropertyName): T[] => {
  return model.data.map((value) => value.attributes[propertyName]);
}

export const mapFromStrapi = <T>(model: StrapiUnifiedModel<T>): T => {
  return model.data.attributes;
}
