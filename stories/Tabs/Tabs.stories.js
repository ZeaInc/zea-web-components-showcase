import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  argTypes: {
    orientation: {
      description: "desc",
      default: 'horizontal',
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
        expanded: true
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

const Template = (args) => Tabs(args);
export const Default = Template.bind({});

Default.args = {
  orientation: 'horizontal'
};