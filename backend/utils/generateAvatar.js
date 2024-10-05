import { createAvatar } from "@dicebear/core";
import * as identicon from "@dicebear/identicon";

const generateAvatarSVG = (seed) => {
  const avatar = createAvatar(identicon, {
    seed,
  });

  return avatar.toString();
};

export default generateAvatarSVG;
