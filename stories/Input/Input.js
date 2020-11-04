import { document } from 'globalthis/implementation';
import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ name, type, value, label, invalidMessage, required, isValid, autoValidate, invalid }) => {
  return html`<zea-input />`
};
