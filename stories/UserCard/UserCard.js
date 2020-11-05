/**
 * Primary UI component for user interaction
 */
export const UserCard = ({ }) => {
 const cardElement = document.createElement('zea-user-card')

  cardElement.userData = {
    firstName: 'Zea',
    lastName: 'User',
    phone: '1111111111',
    email: 'info@zea.live',
    company: 'Zea Inc.',
  }

  return cardElement
};
