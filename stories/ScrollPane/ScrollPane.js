import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const ScrollPane = ({ content }) => {
 return html`<div style="width: 300px; height; 300px" ><zea-scroll-pane>${content}</zea-scroll-pane>`
};
