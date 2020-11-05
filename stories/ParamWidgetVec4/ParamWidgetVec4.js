import { Vec4, Vec4Parameter } from '@zeainc/zea-engine'

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetVec4 = ({ }) => {
  const parameter = new Vec4Parameter('Vec4Parameter', new Vec4(1, 2, 4, 3))
  const paramWidget = document.createElement('zea-param-widget-vec4')
  paramWidget.parameter = parameter

  return paramWidget
};
