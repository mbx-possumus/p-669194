import React from "react";

interface UserAvatarProps {
  src: string;
  alt?: string;
  className?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  alt = "User avatar",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`aspect-[1] object-contain w-[43px] shrink-0 rounded-[50%] ${className}`}
    />
  );
};
