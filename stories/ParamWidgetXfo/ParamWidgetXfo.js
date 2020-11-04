const { Xfo, XfoParameter } = globalThis.zeaEngine

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetXfo = ({ }) => {
  const xfo = new Xfo()

  xfo.tr.set(1, 2, 3)
  xfo.ori.set(4, 5, 6, 7)
  xfo.ori.normalizeInPlace()
  xfo.sc.set(8, 9, 10)

  const parameter = new XfoParameter('XfoParameter', xfo)
  const paramWidget = document.createElement('zea-param-widget-xfo')
  paramWidget.parameter = parameter

  return paramWidget
};
