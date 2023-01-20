import { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = e => {
    const { value } = e.target;

    this.setState(() => {
      return { [value]: this.state[value] + 1};
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => (total += el), 0);
  }

  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ ...this.state}}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title='Statistics'>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    )
  }
}