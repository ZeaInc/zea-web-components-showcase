import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Toolbar = ({ }) => {
 const toolbar = document.createElement('zea-toolbar')
  toolbar.tools = {
    tool1: {
      tag: 'zea-toolbar-tool',
      data: {
        icon: 'alarm-outline',
        toolName: 'Alarm Test Tool',
        callback: (e) => console.log('alarm clicked', e)
      },
    },
    tool2: {
      tag: 'zea-toolbar-toolset',
      data: {
        tools: {
          tool21: {
            tag: 'zea-toolbar-tool',
            data: {
              icon: 'beer-outline',
              toolName: 'beer Test Tool',
            },
          },
          tool22: {
            tag: 'zea-toolbar-tool',
            data: {
              icon: 'bicycle-outline',
              toolName: 'bicycle Test Tool',
            },
          },
          tool23: {
            tag: 'zea-toolbar-tool',
            data: {
              icon: 'car-outline',
              toolName: 'car Test Tool',
            },
          },
        },
      },
    },
    tool3: {
      tag: 'zea-toolbar-colorpicker',
      data: {
        colors: {
          color1: {
            background: 'red',
            foreground: 'white',
            callback: (e) => console.log('clicked red', e),
          },
          color2: {
            background: 'green',
            foreground: 'white',
          },
          color3: {
            background: 'blue',
            foreground: 'white',
          },
        },
      },
    },
  }

  return toolbar
};
