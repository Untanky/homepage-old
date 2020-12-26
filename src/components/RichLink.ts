import ComponentData from "../interfaces/ComponentData";

interface RichLink extends ComponentData {
  title: string,
  text: string,
  imageUrl: string,
  linkUrl: string,
  classes: string[],
}

export default RichLink;
