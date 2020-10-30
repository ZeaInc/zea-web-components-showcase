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
      control: {
        type: 'number'
      }
    },
    resizeCellA: {
      control: {
        type: 'boolean'
      }
    },
    cellCSize: {
      control: {
        type: 'number'
      }
    },
    resizeCellC: {
      control: {
        type: 'boolean'
      }
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'some component _markdown_'
      },
      source: {
        code: `<zea-layout orientation="vertical" cell-a-size="50" resize-cell-a="false" cell-c-size="0" resize-cell-c="false" />`
      },
  },
  }
};

const Template = (args) => Layout(args);
export const Default = Template.bind({});
Default.args = {
  orientation: 'vertical',
  cellASize: 50,
  resizeCellA: false,
  cellCSize: 0,
  resizeCellC: false,
};
