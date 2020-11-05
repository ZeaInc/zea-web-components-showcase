import { ProgressBar } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
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

const Template = (args) => ProgressBar(args);
export const Default = Template.bind({});

Default.args = {
};