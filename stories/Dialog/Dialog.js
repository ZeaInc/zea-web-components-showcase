import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Dialog = ({ shown, allowClose, title }) => {
  return html`<zea-dialog shown=${shown} allow-close="${allowClose}"></div>`
};
