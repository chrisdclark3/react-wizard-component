import * as React from "react";
import { IStepProps, Step } from "./Step";
import "./Steps.css";

export interface IStepsProps {
  steps: IStepProps[];
}

export class Steps extends React.Component<IStepsProps> {
  public render() {
    return (
      <section className={"Steps"}>
        {this.props.steps.map((step: IStepProps, index: number) => {
          return <Step {...step} index={index} key={step.id} />;
        })}
      </section>
    );
  }
}
