import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ htmlContent, variant, disabled, color, density }) => {
  return html`<zea-button variant=${variant} disabled=${disabled} color=${color} density=${density}>${htmlContent}</zea-button>`
};
