import { PanelProgressBar } from './PanelProgressBar';

export default {
  title: 'Components/PanelProgressBar',
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

const Template = (args) => PanelProgressBar(args);
export const Default = Template.bind({});

Default.args = {
};