import { StringParameter } from '@zeainc/zea-engine'

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetString = ({ }) => {
  const parameter = new StringParameter('String Parameter', 'Test String')
  const paramWidget = document.createElement('zea-param-widget-string')
  paramWidget.parameter = parameter

  return paramWidget
};
