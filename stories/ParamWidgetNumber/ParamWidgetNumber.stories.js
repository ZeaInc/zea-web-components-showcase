import { ParamWidgetNumber } from './ParamWidgetNumber';

export default {
  title: 'Components/ParamWidgetNumber',
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

const Template = (args) => ParamWidgetNumber(args);
export const Default = Template.bind({});

Default.args = {
};