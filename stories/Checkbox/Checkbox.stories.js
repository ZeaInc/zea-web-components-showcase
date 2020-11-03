import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    checked: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
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

const Template = (args) => Checkbox(args);
export const Default = Template.bind({});
Default.args = {
  checked: true,
  disabled: false
};
