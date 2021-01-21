const { Color, TreeItem } = globalThis.zeaEngine
const { SelectionManager } = globalThis.zeaUx

/**
 * Primary UI component for user interaction
 */
export const TreeView = ({
  highlightColor,
  enableHighlights,
  setSelected,
  nDeep,
}) => {
  const colorData = highlightColor
    .replace('rgba(', '')
    .replace(')', '')
    .split(',')
    .map((val) => parseFloat(val))
  const treeViewElement = document.createElement('zea-tree-view')

  const rootTreeItem = new TreeItem('MainItem')
  const selectionManager = new SelectionManager({}, {})

  // Note: the alpha value determines  the fill of the highlight.
  const selectionColor = new Color('#CEFF00')
  selectionColor.a = 0.1
  const subtreeColor = selectionColor.lerp(new Color(1, 1, 1, 0), 0.5)
  selectionManager.selectionGroup
    .getParameter('HighlightColor')
    .setValue(selectionColor)
  selectionManager.selectionGroup
    .getParameter('SubtreeHighlightColor')
    .setValue(subtreeColor)

  const color = new Color(
    colorData[0] / 255,
    colorData[1] / 255,
    colorData[2] / 255
  )
  color.a = colorData[3]

  const addHighlights = (treeItem, index) => {
    let highlighted = false

    setInterval(() => {
      !highlighted
        ? treeItem.addHighlight('test', color, true)
        : treeItem.removeHighlight('test', true)
      highlighted = !highlighted
    }, index * 500 + 500)
  }

  let childk

  for (let i = 0; i < nDeep; i++) {
    const childI = new TreeItem('Child' + i)
    for (let j = 0; j < nDeep; j++) {
      const childJ = new TreeItem('Child' + j)
      for (let k = 0; k < nDeep; k++) {
        childk = new TreeItem('Child' + k)
        childJ.addChild(childk)
      }
      childI.addChild(childJ)
    }

    if (enableHighlights) addHighlights(childI, i)
    rootTreeItem.addChild(childI)
  }

  if (setSelected) selectionManager.setSelection(new Set([rootTreeItem]))
  treeViewElement.items = [rootTreeItem, new TreeItem('Second')]
  treeViewElement.selectionManager = selectionManager

  // setTimeout(() => {
  //   rootTreeItem.setName('NameChangeTest')
  // }, 2000)

  // setTimeout(() => {
  //   const newChild = new TreeItem('NewChild')
  //   rootTreeItem.addChild(newChild)
  // }, 3000)

  // setTimeout(() => {
  //   const newChild = new TreeItem('NewRoot')
  //   newChild.addChild(new TreeItem('NewRootChild'))
  //   treeViewElement.items = [newChild]
  // }, 5000)

  return treeViewElement
}
