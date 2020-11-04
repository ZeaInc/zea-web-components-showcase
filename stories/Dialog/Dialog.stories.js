import { Dialog } from './Dialog';

export default {
  title: 'Components/Dialog',
  argTypes: {
    shown: {
      control: {
        type: 'boolean'
      }
    },
    allowClose: {
      control: {
        type: 'boolean'
      }
    },
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

const Template = (args) => Dialog(args);
export const Default = Template.bind({});
Default.args = {
  shown: true,
  allowClose: false,
};
