import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "",
    };
  }
  componentDidMount() {
    this.setState({
      foo: window.location.search,
    });
  }
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: this.state.foo }} />
      </>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);
