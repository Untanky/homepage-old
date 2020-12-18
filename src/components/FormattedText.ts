import ComponentData from '../interfaces/ComponentData';

interface FormattedText extends ComponentData {
  text: string,
  variant: string,
  size: string,
  alignment: string,
  color: string,
  bold: boolean,
  italic: boolean,
  underline: boolean,
  classes: string[],
}

export default FormattedText;
