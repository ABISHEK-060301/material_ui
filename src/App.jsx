import { createContext } from "react";
import "./App.css";
import LoadingWrapper from "./containers/loading-wrapper";
import Main from "./containers/main";

const loading = createContext();

function App() {
  return (
    <div className="App-header">
      <LoadingWrapper>
        <Main />
      </LoadingWrapper>
    </div>
  );
}

export { App, loading };
