import ComponentData from '../interfaces/ComponentData';

interface FormattedText extends ComponentData {
  text: string,
  classes: string[],
}

export default FormattedText;
