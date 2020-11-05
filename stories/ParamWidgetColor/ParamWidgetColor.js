import { Color, ColorParameter } from '@zeainc/zea-engine'

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetColor = ({ }) => {
  const parameter = new ColorParameter('Color Parameter', new Color('#FF0000'))
  const paramWidget = document.createElement('zea-param-widget-color')
  paramWidget.parameter = parameter

  return paramWidget
};
