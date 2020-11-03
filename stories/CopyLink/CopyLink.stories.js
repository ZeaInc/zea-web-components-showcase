import { CopyLink } from './CopyLink';

export default {
  title: 'Components/CopyLink',
  argTypes: {
    tooltipIsVisible: {
      control: {
        type: 'boolean'
      }
    },
    tooltipText: {},
    link: {}
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

const Template = (args) => CopyLink(args);
export const Default = Template.bind({});
Default.args = {
  tooltipIsVisible: false,
  tooltipText: 'Custom Copy',
  link: 'https://www.zea.live/'
};
