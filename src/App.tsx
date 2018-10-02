import * as React from "react";
import "./App.css";
import { TestStepContent } from "./TestStepContent/TestStepContent";
import { IStep, Wizard } from "./Wizard";

class App extends React.Component<any, any> {
  public get steps(): IStep[] {
    return [
      {
        content: <h3>1st Step Content</h3>,
        title: "First Step Title"
      },
      {
        content: <h3>2nd Step Content</h3>,
        title: "Second Step Title"
      },
      {
        content: (
          <div>
            <h3>Third step example content</h3>
            <h5>With a bit more structure</h5>
          </div>
        ),
        title: "Third Step Title"
      },
      {
        content: (
          <TestStepContent>
            <h5>Additional JSX child</h5>
          </TestStepContent>
        ),
        title: "Fourth Step Title"
      }
    ];
  }

  public render() {
    return (
      <div className="App">
        <Wizard steps={this.steps} />
      </div>
    );
  }
}

export default App;
