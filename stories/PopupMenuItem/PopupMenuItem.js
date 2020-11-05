import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const PopupMenuItem = ({ }) => {
  const container = document.createElement('div')
  const item1 = document.createElement('zea-popup-menu-item')
  const item2 = document.createElement('zea-popup-menu-item')

  const itemClickHandler = (e) => {
    console.log(e)
  }

  item1.innerHTML = 'item 1'
  item2.innerHTML = 'item 2'

  item1.startIcon = 'add'
  item2.startIcon = 'create'

  item1.clickHandler = itemClickHandler
  item2.clickHandler = itemClickHandler

  container.appendChild(item1)
  container.appendChild(item2)
  return container
};
