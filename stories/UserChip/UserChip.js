/**
 * Primary UI component for user interaction
 */
export const UserChip = ({ }) => {
 const user = {
    avatar: 'https://placeimg.com/640/420/any',
    firstName: 'John',
    lastName: 'Smith',
    phone: '12344567',
    email: 'test@example.com',
    company: 'Zea Inc.',
  }
  const zeaChipInstance = document.createElement('zea-user-chip')
  zeaChipInstance.userData = user
  return zeaChipInstance
};
