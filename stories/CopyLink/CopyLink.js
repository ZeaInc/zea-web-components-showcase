import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const CopyLink = ({ tooltipIsVisible, tooltipText, link }) => {
  return html`<zea-copy-link tooltip-is-visible="${tooltipIsVisible}" tooltip-text="${tooltipText}" link="${link}"/>`
};
