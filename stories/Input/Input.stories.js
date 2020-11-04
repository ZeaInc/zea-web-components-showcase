import { Input } from './Input';

export default {
  title: 'Components/Input',
  argTypes: {
    
  },
  parameters: {
    docs: {
      description: {
        component: '**Input description**'
      },
      source: {
        code: `<zea-Input orientation="vertical" cell-a-size="50" resize-cell-a="false" cell-c-size="0" resize-cell-c="false" />`
      },
    },
  },
};

const Template = (args) => Input(args);
export const Default = Template.bind({});
Default.args = {
};
