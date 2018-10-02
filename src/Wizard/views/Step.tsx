import * as React from "react";
import "./Step.css";

export interface IStep {
  content: JSX.Element;
  title: string;
}

export interface IStepProps extends IStep {
  isSelected: boolean;
  id: string;
  index: number;
}

export class Step extends React.Component<IStepProps, any> {
  public render() {
    return (
      <div className={this.className} key={this.props.id}>
        <span className={"Number"}>{this.stepNumber}</span>
        <span className={"Title"}>{this.props.title}</span>
        <span className={"Line"} />
      </div>
    );
  }

  private get stepNumber(): number {
    return this.props.index + 1;
  }

  private get className(): string {
    const classes = ["Step"];
    if (this.props.isSelected) {
      classes.push("Selected");
    }
    return classes.join(" ");
  }
}
