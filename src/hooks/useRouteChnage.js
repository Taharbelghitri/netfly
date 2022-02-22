import { useEffect } from "react";
import { useLocation } from "react-router";

const useRouteChange = () => {
  const location = useLocation();
  let newLocation = location;
  useEffect(() => {
    newLocation = location;
  }, [location]);
  return location;
};
export default useRouteChange;
