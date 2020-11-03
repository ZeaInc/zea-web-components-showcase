import { Button } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    htmlContent: {},
    variant: {},
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

const Template = (args) => Button(args);
export const Default = Template.bind({});
Default.args = {
  htmlContent: 'Button',
  variant: 'Solid'
};
