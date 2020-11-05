import { Vec3, Vec3Parameter } from '@zeainc/zea-engine'

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetVec3 = ({ }) => {
  const parameter = new Vec3Parameter('Vec3Parameter', new Vec3(1, 2, 3))
  const paramWidget = document.createElement('zea-param-widget-vec3')
  paramWidget.parameter = parameter

  return paramWidget
};
