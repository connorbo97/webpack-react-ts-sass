import * as React from "react";
import Header from './components/Header';
import NonTSComponent from './components/NonTSComponent';
import ErrorBoundary from './ErrorBoundary';

const reactLogo = require("./assets/img/react_logo.svg");
import "./assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <ErrorBoundary >
        <div className="app">
        <Header name={"test"} X={1} Y={2} />
        <NonTSComponent />
        <h1>Hello World!</h1>
        <p>Foo to the barz</p>
        <img src={reactLogo.default} height="480" />
      </div>
    </ErrorBoundary>);
  }
}

export default App;
