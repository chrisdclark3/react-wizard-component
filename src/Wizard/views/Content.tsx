import * as React from "react";
import "./Content.css";

export class Content extends React.Component {
  public render() {
    return <section className={"Content"}>{this.props.children}</section>;
  }
}
