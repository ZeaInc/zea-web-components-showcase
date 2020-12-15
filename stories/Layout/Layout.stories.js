import { Layout } from './Layout';

export default {
  title: 'Components/Layout',
  argTypes: {
    orientation: {
      description: "desc",
      default: 'vertical',
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
        expanded: true
      }
    },
    cellASize: {
      default: '150',
      control: {
        type: 'number'
      }
    },
    cellCSize: {
      default: '150',
      control: {
        type: 'number'
      }
    },
    borders: {
      default: true,
      control: {
        type: 'boolean'
      }
    },
    addCells: {
      description: "desc",
      default: 'ABC',
      control: {
        type: 'select',
        options: ['AB', 'ABC', 'BC'],
        expanded: true
      }
    },
    showResizeHandles: {
      description: "desc",
      default: 'AC',
      control: {
        type: 'select',
        options: ['A', 'AC', 'C'],
        expanded: true
      }
    }
  },
  parameters: {
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

const Template = (args) => Layout(args);
export const Default = Template.bind({});
Default.args = {
  orientation: 'horizontal',
  cellASize: 150,
  cellCSize: 150,
  addCells: 'ABC',
  borders: true,
  showResizeHandles: 'AC'
};
