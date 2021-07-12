import * as React from "react";
import Header from './components/Header';

const reactLogo = require("./assets/img/react_logo.svg");
import "./assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Header />
        <h1>Hello World!</h1>
        <p>Foo to the barz</p>
        <img src={reactLogo.default} height="480" />
      </div>
    );
  }
}

export default App;
