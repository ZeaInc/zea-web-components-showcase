import { html } from 'lit-html';
const { CodeParameter } = globalThis.zeaEngine

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetCode = ({ }) => {
  const parameter = new CodeParameter('Code Parameter', 'This is a test')
  const paramWidget = document.createElement('zea-param-widget-code')
  paramWidget.parameter = parameter

  return paramWidget
};
