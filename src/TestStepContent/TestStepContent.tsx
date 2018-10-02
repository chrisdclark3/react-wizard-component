import * as React from "react";

export class TestStepContent extends React.PureComponent {
  public render() {
    return (
      <div>
        <h1>Title for TestStepContent</h1>
        {this.props.children}
      </div>
    );
  }
}
