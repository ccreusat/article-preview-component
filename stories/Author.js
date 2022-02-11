import { createIMG } from "./Image";

export const createAuthor = ({url = '/avatar-michelle.jpg', alt = "michelle"}) => {
  const avatar = document.createElement('figure');
  const avatarImage = createIMG({url, alt});

  avatar.className = 'avatar';
  avatar.appendChild(avatarImage);

  return avatar;
};
