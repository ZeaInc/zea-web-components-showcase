import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const QrCode = ({ content }) => {
 return html`<zea-qr-code content="${content}"></zea-qr-code>`
};
