<script lang="ts">
import Vue, { PropType } from 'vue';
import FormattedText from '../../src/components/FormattedText';

export default Vue.extend({
  name: 'FormattedText',
  props: {
    data: {
      type: Object as PropType<FormattedText>,
      required: true,
    },
  },
  methods: {
    elementType() {
      if (!this.data.variant || this.data.variant === '') {
        return 'div';
      }

      return this.data.variant;
    },
    classes() {
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
  render(createElement) {
    console.log(Object.keys(this));
    return createElement(
      this.elementType(),
      {
        class: this.classes(),
      },
      [
        // eslint-disable-next-line no-underscore-dangle
        this._v(this.data.text),
      ],
    );
  },
});
</script>
