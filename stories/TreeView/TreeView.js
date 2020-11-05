import { TreeItem } from '@zeainc/zea-engine'
import { SelectionManager } from '@zeainc/zea-ux'

/**
 * Primary UI component for user interaction
 */
export const TreeView = ({ }) => {
 const treeViewElement = document.createElement('zea-tree-view')

  const rootTreeItem = new TreeItem()
  const selectionManager = new SelectionManager({}, {})

  let childk

  for (let i = 0; i < 10; i++) {
    const childI = new TreeItem('Child' + i)
    for (let j = 0; j < 10; j++) {
      const childJ = new TreeItem('Child' + j)
      for (let k = 0; k < 10; k++) {
        childk = new TreeItem('Child' + k)
        childJ.addChild(childk)
      }
      childI.addChild(childJ)
    }
    rootTreeItem.addChild(childI)
  }

  treeViewElement.appData = {
    selectionManager,
  }

  treeViewElement.rootItem = rootTreeItem

  setTimeout(() => {
    childk.setName('Test name change')
  }, 5000)

  return treeViewElement
};
