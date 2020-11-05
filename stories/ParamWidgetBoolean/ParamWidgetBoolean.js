import { html } from 'lit-html';
import { BooleanParameter } from '@zeainc/zea-engine'

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetBoolean = ({ }) => {
  const parameter = new BooleanParameter('Foo', false)
  const paramWidget = document.createElement('zea-param-widget-boolean')
  paramWidget.parameter = parameter

  return paramWidget
};
