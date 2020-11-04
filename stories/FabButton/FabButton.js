import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const FabButton = ({ disabled }) => {
  return html`<zea-fab-button disabled="${disabled}"><zea-icon name="add-outline"></zea-icon></zea-fab-button>`
};
