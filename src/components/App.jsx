import { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = e => {
    const option = e.target.value;

    this.setState(prevState => {
      return { [option]: prevState[option] + 1};
    })
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
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback!" />
          )}
        </Section>
      </>
    )
  }
}