import { TreeView } from './TreeView';

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
        component: '**Layout description**'
      },
      source: {
        code: `<zea-layout orientation="vertical" cell-a-size="50" resize-cell-a="false" cell-c-size="0" resize-cell-c="false" />`
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