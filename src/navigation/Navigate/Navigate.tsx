import { useEffect } from "react";

import { useNavigate } from "../navigation";

interface NavigatePropsType {
  to: string;
}

const Navigate = ({ to }: NavigatePropsType) => {
  const navigate = useNavigate()?.navigate;

  useEffect(() => {
    navigate && navigate(to);
  }, []);

  return null;
};

export default Navigate;
