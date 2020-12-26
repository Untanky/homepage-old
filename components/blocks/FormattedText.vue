<script lang="ts">
import Vue, { PropType, VNode } from 'vue';
import FormattedText from '../../src/components/FormattedText';

export default Vue.extend({
  name: 'FormattedText',
  props: {
    data: {
      type: Object as PropType<FormattedText>,
      required: true,
    },
  },
  computed: {
    elementType(): string {
      if (!this.data.variant || this.data.variant === '') {
        return 'div';
      }

      return this.data.variant;
    },
    classes(): string[] {
      const classList = [...this.data.classes];

      if ([undefined, '', 'div', 'span', 'code'].includes(this.data.variant) && this.data.size) {
        classList.push(`text-${this.data.size}`);
      }

      if (this.data.color) {
        classList.push(`text-${this.data.color}`);
      }

      if (this.data.alignment) {
        classList.push(`text-${this.data.alignment}`);
      }

      if (this.data.bold) {
        classList.push('font-bold');
      }

      if (this.data.italic) {
        classList.push('italic');
      }

      if (this.data.underline) {
        classList.push('underline');
      }

      return classList;
    },
  },
  render(createElement): VNode {
    return createElement(
      this.elementType,
      {
        class: this.classes,
      },
      this.data.text,
    );
  },
});
</script>
