import { MenuColorpicker } from './MenuColorpicker';

export default {
  title: 'Components/MenuColorpicker',
  argTypes: {
    
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

const Template = (args) => MenuColorpicker(args);
export const Default = Template.bind({});

Default.args = {
};