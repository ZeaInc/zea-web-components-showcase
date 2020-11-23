import { TreeView } from './TreeView';

const documentation = `
## Properties

| Property    | Attribute   | Description | Type      | Default     |
| ----------- | ----------- | ----------- | --------- | ----------- |
| **items**   | --         |             | BaseItem[]   | undefined |
| **expand**    | expand    |             | boolean | true     |
| **selectionManager**   | selection-manager  |             | SelectionManager     | undefined |
| ** undoRedoManager**   | undo-redo-manager  |             | UndoRedoManager     | undefined |
`

const code = `
const treeViewEl = document.createElement('zea-tree-view')
treeViewEl.items = [new TreeItem('TreeItem1'), new TreeItem('TreeItem2')]
treeViewEl.selectionManager = new SelectionManager({}, {})
treeViewEl.undoRedoManager = UndoRedoManager.getInstance()
`

export default {
  title: 'Components/TreeView',
  argTypes: {
    highlightColor: {
      control: {
        type: 'color'
      }
    },
    enableHighlights: {
      control: {
        type: 'boolean'
      }
    },
    setSelected: {
      control: {
        type: 'boolean'
      }
    },
    nDeep: {
      control: {
        type: 'number'
      }
    }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: documentation
      },
      source: {
        code
      },
    },
  },
};

const Template = (args) => TreeView(args);
export const Default = Template.bind({});

Default.args = {
  highlightColor: 'rgba(0, 255, 0, 0.5)',
  enableHighlights: false,
  setSelected: false,
  nDeep: 2
};