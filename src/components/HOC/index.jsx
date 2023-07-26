import { useLocation, useNavigate } from "react-router-dom";

const HOC = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    return <Component {...props} router={{ location, navigate }} />;
  }
  return ComponentWithRouterProp;
};

export default HOC;
