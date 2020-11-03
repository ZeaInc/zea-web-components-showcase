import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ htmlContent }) => {
  return html`<zea-button htmlContent=${htmlContent} />`
};
