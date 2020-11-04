const { Vec2, Vec2Parameter } = globalThis.zeaEngine

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetVec2 = ({ }) => {
  const parameter = new Vec2Parameter('Vec2Parameter', new Vec2(1, 2))
  const paramWidget = document.createElement('zea-param-widget-vec2')
  paramWidget.parameter = parameter

  return paramWidget
};
