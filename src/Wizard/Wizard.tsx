import * as React from "react";
import * as uuid from "uuid/v4";
import { Actions, Content, IStep, IStepProps, Steps } from "./views";
import "./Wizard.css";

export interface IWizardProps {
  steps: IStep[];
}

export interface IWizardState {
  steps: IStepProps[];
}

export class Wizard extends React.Component<IWizardProps, IWizardState> {
  public get currentStep(): IStepProps {
    return (
      this.state.steps.find(step => {
        return step.isSelected;
      }) || this.state.steps[0]
    );
  }

  constructor(props: IWizardProps) {
    super(props);
    const steps = this.initSteps(props.steps);
    this.state = {
      steps
    };
  }

  public componentWillMount() {
    if (this.hasSteps) {
      this.onSelectStep(this.state.steps[0]);
    }
  }

  public onSelectStep = (selectedStep: IStepProps): void => {
    const steps = this.state.steps.map(step => {
      if (step.id === selectedStep.id) {
        step.isSelected = true;
      } else {
        step.isSelected = false;
      }
      return step;
    });
    this.setState({ steps });
  };

  public render() {
    if (this.hasSteps) {
      return (
        <div className={"Wizard"}>
          <Steps steps={this.state.steps} />
          <Content>{this.currentStep.content}</Content>
          <Actions
            steps={this.state.steps}
            currentStep={this.currentStep}
            onSelectStep={this.onSelectStep}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  private get hasSteps(): boolean {
    return Array.isArray(this.props.steps) && this.props.steps.length > 0;
  }

  private initSteps(steps: IStep[]): IStepProps[] {
    return steps.map((s, index) => {
      const step: IStepProps = {
        content: s.content,
        id: uuid(),
        index,
        isSelected: false,
        title: s.title
      };
      return step;
    });
  }
}
