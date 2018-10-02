import * as React from "react";
import "./Actions.css";
import { IStepProps } from "./Step";

export interface IActionsProps {
  currentStep: IStepProps;
  onSelectStep: (step: IStepProps) => void;
  steps: IStepProps[];
}

export class Actions extends React.Component<IActionsProps, any> {
  public render() {
    return (
      <section className={"Actions"}>
        <button onClick={this.onSelectPrevious}>Previous</button>
        <button onClick={this.onSelectNext}>Next</button>
      </section>
    );
  }

  private onSelectPrevious = () => {
    if (this.props.currentStep.index > 0) {
      this.props.onSelectStep(
        this.props.steps[this.props.currentStep.index - 1]
      );
    }
  };

  private onSelectNext = () => {
    if (this.props.currentStep.index < this.props.steps.length - 1) {
      this.props.onSelectStep(
        this.props.steps[this.props.currentStep.index + 1]
      );
    }
  };
}
