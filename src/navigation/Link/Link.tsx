import React from "react";

import { useNavigate } from "../navigation";

const Link = ({ to, onClick, children, ...rest }: any) => {
  const navigate = useNavigate()?.navigate;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    !e.metaKey && !e.ctrlKey && e.preventDefault();

    onClick && onClick();

    navigate && navigate(to);
  };

  return (
    <a {...rest} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
