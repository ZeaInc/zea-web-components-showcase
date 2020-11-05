import MockSession from '../assets/MockSession.js'

/**
 * Primary UI component for user interaction
 */
export const UserChipSet = ({ }) => {
  const mockSession = new MockSession('https://websocket-staging.zea.live')
  const elm = document.createElement('zea-user-chip-set')
  elm.session = mockSession.getSession()
  elm.showImages = true

  document.addEventListener(
    'zeaUserClicked',
    () => {
      console.log('user clicked')
    },
    false
  )

  const constContainer = document.createElement('div')
  constContainer.style.backgroundColor = 'var(--color-grey-2)'
  constContainer.style.height = '64px'
  constContainer.style.padding = '14px'
  constContainer.appendChild(elm)

  return constContainer
};
