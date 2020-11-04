import { html } from 'lit-html';
const { Box3, Parameter } = globalThis.zeaEngine

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetBBox = ({ }) => {
  const value = new Box3()
  value.p0.set(1, 2, 3)
  value.p1.set(4, 5, 6)

  const parameter = new Parameter('Box3Parameter', value, 'Box3')
  const paramWidget = document.createElement('zea-param-widget-bbox')
  paramWidget.parameter = parameter

  return paramWidget
};
