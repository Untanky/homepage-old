import { FormattedText } from '.';
import ComponentData from '../interfaces/ComponentData';

interface StackedTexts extends ComponentData {
  formattedTexts: FormattedText[];
  classes: string[]
}

export default StackedTexts;
