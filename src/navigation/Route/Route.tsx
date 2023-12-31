import { useNavigate } from "../navigation";

const Route = ({ to, element, children }: any) => {
  const navigation = useNavigate();
  const currentPath = navigation?.currentPath;

  return to === currentPath
    ? (element && element) || (children && children)
    : null;
};

export default Route;
