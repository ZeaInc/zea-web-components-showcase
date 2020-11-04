import { ParamWidgetVec2 } from './ParamWidgetVec2';

export default {
  title: 'Components/ParamWidgetVec2',
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

const Template = (args) => ParamWidgetVec2(args);
export const Default = Template.bind({});

Default.args = {
};