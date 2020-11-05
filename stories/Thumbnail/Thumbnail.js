import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Thumbnail = ({ }) => {
 const zeaFsObject = document.createElement('zea-thumbnail')

  zeaFsObject.zeaModelInstance = {
    name: 'Foo',
    thumbnail: 'https://placeimg.com/400/300/any',
  }

  zeaFsObject.addEventListener('clickThumbnail', (e) =>
    console.log(e.type, e.detail)
  )

  zeaFsObject.addEventListener('dblClickThumbnail', (e) =>
    console.log(e.type, e.detail)
  )

  return zeaFsObject
};
