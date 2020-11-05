import { NumberParameter } from '@zeainc/zea-engine'

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetNumber = ({ }) => {
  const parameter = new NumberParameter('Number Parameter', 6, [0, 30], 5)
  const paramWidget = document.createElement('zea-param-widget-number')
  paramWidget.parameter = parameter

  return paramWidget
};
