import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const PopupMenu = ({ htmlContent }) => {
  const element = document.createElement('zea-popup-menu')
  const item1 = document.createElement('zea-popup-menu-item')
  const item2 = document.createElement('zea-popup-menu-item')
  const item3 = document.createElement('zea-popup-menu-item')

  item1.innerHTML = 'item 1'
  item2.innerHTML = 'item 2'
  item3.innerHTML = 'item 3'

  item1.startIcon = 'add'
  item2.startIcon = 'create'
  item3.startIcon = 'cash'

  const itemClickHandler = (e) => {
    console.log(e)
  }

  item1.clickHandler = itemClickHandler
  item2.clickHandler = itemClickHandler
  item3.clickHandler = itemClickHandler

  element.appendChild(item1)
  element.appendChild(item2)
  element.appendChild(item3)

  const anchor = document.createElement('button')
  const container = document.createElement('div')

  anchor.innerHTML = 'Show Menu'

  element.anchorElement = anchor

  container.appendChild(anchor)
  container.appendChild(element)
  return container
};
