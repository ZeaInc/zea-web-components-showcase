import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Layout = ({ orientation, cellASize, cellCSize, addCells, borders, showResizeHandles }) => {
  return html`<zea-layout orientation=${orientation} cell-a-size=${cellASize} cell-c-size=${cellCSize} add-cells=${addCells} show-resize-handles=${showResizeHandles} borders=${borders} />`
};
