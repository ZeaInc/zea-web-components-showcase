import { ScrollPane } from './ScrollPane';

export default {
  title: 'Components/ScrollPane',
  argTypes: {
    content: {}
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

const Template = (args) => ScrollPane(args);
export const Default = Template.bind({});

Default.args = {
  content: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie sed turpis et fringilla. Quisque vel rutrum quam, sodales hendrerit eros. Nunc imperdiet pulvinar augue vitae ultrices. Vivamus ac eros vulputate, maximus nisi sed, varius sem. Cras condimentum neque risus, in vestibulum quam pretium sed. Morbi vitae eros eleifend, auctor nunc in, tincidunt mauris. Praesent bibendum enim felis, tincidunt facilisis nulla accumsan a. Pellentesque nec lorem diam.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie sed turpis et fringilla. Quisque vel rutrum quam, sodales hendrerit eros. Nunc imperdiet pulvinar augue vitae ultrices. Vivamus ac eros vulputate, maximus nisi sed, varius sem. Cras condimentum neque risus, in vestibulum quam pretium sed. Morbi vitae eros eleifend, auctor nunc in, tincidunt mauris. Praesent bibendum enim felis, tincidunt facilisis nulla accumsan a. Pellentesque nec lorem diam.
      </p>`
};