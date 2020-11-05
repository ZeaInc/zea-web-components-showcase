import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Tabs = ({ orientation }) => {
 return html`<zea-tabs orientation="${orientation}">
              <div slot="tab-bar">Tab Label 1</div>
              <div>Tab Content 1</div>

              <div slot="tab-bar">Tab Label 2</div>
              <div>Tab Content 2</div>
          </zea-tabs>`
};
