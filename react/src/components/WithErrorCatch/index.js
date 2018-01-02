import React, {Component, Fragment} from 'react';

function withErrorCatch(WrappedComponent) {
  return class extends Component {
    state = { error: null, errorInfo: null }

    componentDidCatch(error, errorInfo) {
      // Catch errors in any child components and re-renders with an error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
    render() {
      if (this.state.error) {
        // Fallback UI if an error occurs
        return (
          <Fragment>
            <h2>{"Oh-no! Something went wrong"}</h2>
            <p className="red">
              {this.state.error && this.state.error.toString()}
            </p>
            <div>{"Component Stack Error Details: "}</div>
            <p className="red">{this.state.errorInfo.componentStack}</p>
          </Fragment>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withErrorCatch;
