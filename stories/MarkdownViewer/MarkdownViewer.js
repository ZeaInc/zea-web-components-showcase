import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const MarkdownViewer = ({ }) => {
  const elm = document.createElement('zea-markdown-viewer')
  elm.mdText = `Markdown Text
  # Zea Web Components
  `

  return elm
};
