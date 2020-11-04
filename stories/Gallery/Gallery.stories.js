import { Gallery } from './Gallery';

export default {
  title: 'Components/Gallery',
  argTypes: {
    columns: {
      control: {
        type: 'number'
      }
    },
    featured: {
      control: {
        type: 'number'
      }
    },
    folder: {
      control: {
        type: 'object'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: '**Gallery description**'
      },
      source: {
        code: `<zea-Gallery orientation="vertical" cell-a-size="50" resize-cell-a="false" cell-c-size="0" resize-cell-c="false" />`
      },
    },
  },
};

const Template = (args) => Gallery(args);
export const Default = Template.bind({});
Default.args = {
  columns: 2,
  featured: 4,
  folder: {
    children: {
      image1: {
        url: 'https://placekitten.com/800/600?nocache=1',
        type: 'image/jpeg',
      },
      image2: {
        url: 'https://placekitten.com/800/601?nocache=1',
        type: 'image/jpeg',
      },
      image3: {
        url: 'https://placekitten.com/800/602?nocache=1',
        type: 'image/jpeg',
      },
      image4: {
        url: 'https://placekitten.com/800/603?nocache=1',
        type: 'image/jpeg',
      },
      image5: {
        url: 'https://placekitten.com/800/604?nocache=1',
        type: 'image/jpeg',
      },
      image6: {
        url: 'https://placekitten.com/800/605?nocache=1',
        type: 'image/jpeg',
      },
      image7: {
        url: 'https://placekitten.com/800/606?nocache=1',
        type: 'image/jpeg',
      },
      image8: {
        url: 'https://placekitten.com/800/607?nocache=1',
        type: 'image/jpeg',
      },
    },
  }
};
