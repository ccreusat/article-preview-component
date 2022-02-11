import { createIMG } from "./Image";

export const createAvatar = ({
  hasCaption = false,
  avatarURL,
  avatarALT,
  name = "Michelle Appleton",
  date = "28 Jun 2020",
}) => {
  const avatar = document.createElement("div");
  const avatarFigure = document.createElement("figure");
  const avatarImage = createIMG({ avatarURL, avatarALT });
  console.log(avatarImage);

  const avatarFigcaption = document.createElement("figcaption");
  const avatarCaption = `<strong>${name}</strong><span>${date}</span>`;

  avatar.className = "avatar";
  avatarFigure.className = "avatar-thumbnail";
  avatarFigcaption.className = "avatar-caption";

  avatarFigure.appendChild(avatarImage);
  avatar.appendChild(avatarFigure);

  if (hasCaption) {
    avatarFigcaption.innerHTML = avatarCaption;
    avatar.appendChild(avatarFigcaption);
  }

  return avatar;
};
