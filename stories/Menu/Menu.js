import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Menu = ({ }) => {
  return html`
  Click the icon to show menu
  <zea-menu type="contextual" show-anchor="true" anchor-icon="ellipsis-vertical-circle-outline">
    <zea-menu-item hotkey="ctrl+L">
      <zea-icon name="link-outline"></zea-icon>
      Add Link
    </zea-menu-item>
  </zea-menu>`
};
