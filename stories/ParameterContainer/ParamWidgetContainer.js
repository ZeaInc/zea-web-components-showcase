import {
  ParameterOwner,
  BooleanParameter,
  NumberParameter,
  Vec2Parameter,
  Vec3Parameter,
  Vec4Parameter,
  Vec2,
  Vec4,
  Vec3,
  Color,
  ColorParameter,
  Xfo,
  XfoParameter,
  StringParameter,
  Box3,
  Parameter,
} from '@zeainc/zea-engine'

/**
 * Primary UI component for user interaction
 */
export const ParamWidgetContainer = ({ }) => {
  const paramWidget = document.createElement('zea-parameter-container')
  const parameterOwner = new ParameterOwner()

  parameterOwner.addParameter(new BooleanParameter('Toggle', false))

  parameterOwner.addParameter(new NumberParameter('MyNumber', 5))

  parameterOwner.addParameter(new NumberParameter('Stepped', 6, [0, 30], 5))

  parameterOwner.addParameter(
    new Vec2Parameter('Vec2 Parameter', new Vec2(1, 2))
  )

  parameterOwner.addParameter(
    new Vec3Parameter('Vec3 Parameter', new Vec3(1, 2, 3))
  )

  parameterOwner.addParameter(
    new Vec4Parameter('Vec4 Parameter', new Vec4(1, 2, 3, 4))
  )

  // Color parameter

  const color = new Color()
  color.setFromRGBDict({ r: 0, g: 0, b: 255 })

  parameterOwner.addParameter(new ColorParameter('Color Parameter', color))

  // XFO parameter

  const xfo = new Xfo()

  xfo.tr.set(1, 2, 3)
  xfo.ori.set(4, 5, 6, 7)
  xfo.ori.normalizeInPlace()
  xfo.sc.set(8, 9, 10)

  parameterOwner.addParameter(new XfoParameter('Xfo Parameter', xfo))

  // String parameter

  parameterOwner.addParameter(
    new StringParameter('String Parameter', 'Test String')
  )

  // Bbox parameter

  const bboxValue = new Box3()

  bboxValue.p0.set(1, 2, 3)
  bboxValue.p1.set(4, 5, 6)

  const bboxParam = new Parameter('Box3', bboxValue, 'Box3')
  parameterOwner.addParameter(bboxParam)

  // Finish paramContainer setup

  paramWidget.parameterOwner = parameterOwner

  return paramWidget
};
