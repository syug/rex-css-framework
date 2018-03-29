import Prism from 'prismjs';

require('prismjs/plugins/custom-class/prism-custom-class.js');

export default function customClassName() {
  Prism.plugins.customClass.map({
    tag: 'prism-tag',
  });
}
