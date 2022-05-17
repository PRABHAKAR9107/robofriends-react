import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-lone-blocks
    {
      this.state = {
        hasError: false,
      };
    }
  }

  // static getDerivedStateFromError(error) {
  //     // Update state so the next render will show the fallback UI.
  //     return { hasError: true };
  //   }

  componentDidCatch(error, Info) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Oops,Error exits</h1>;
    }
    return this.props.children;
  }
}
