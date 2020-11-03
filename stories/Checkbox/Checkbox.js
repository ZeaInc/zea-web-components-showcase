import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ checked, disabled }) => {
  return html`<zea-checkbox checked="${checked}" disabled="${disabled}"/>`
};
