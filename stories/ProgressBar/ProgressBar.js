import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const ProgressBar = ({ }) => {
  const element = document.createElement('zea-progress-bar')

  const container = document.createElement('div')
  container.style.width = '300px'
  container.style.height = '100px'
  container.style.backgroundColor = 'grey'
  container.style.margin = '1em'
  container.style.position = 'relative'
  container.appendChild(element)

  element.percent = 0

  setInterval(() => {
    element.percent += 10
    if (element.percent > 100) element.percent = 0
  }, 1000)

  setTimeout(() => {
    element.percent = 10
  }, 500)

  return container
};
