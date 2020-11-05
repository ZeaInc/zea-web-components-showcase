import { html } from 'lit-html';
import { CodeParameter } from '@zeainc/zea-engine'

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetCode = ({ }) => {
  const parameter = new CodeParameter('Code Parameter', 'This is a test')
  const paramWidget = document.createElement('zea-param-widget-code')
  paramWidget.parameter = parameter

  return paramWidget
};
