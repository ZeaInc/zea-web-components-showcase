import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Layout = ({ orientation, cellASize, resizeCellA, cellBSize, cellCSize, resizeCellC }) => {
  return html`<zea-layout orientation=${orientation} cell-a-size=${cellASize} resize-cell-a=${resizeCellA} cell-b-size="${cellBSize}" cell-c-size=${cellCSize} resize-cell-c=${resizeCellC} />`
};
