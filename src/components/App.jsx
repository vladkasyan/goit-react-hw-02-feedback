
import { Sections } from './section/section';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Statistics } from './statistics/statistics';
import { Notifications } from './notification/notification';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = ({ target: {name} }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, cur) => total += cur)
  }

  countPositiveFeedbackPercentage = (total) => {
    const {good} = this.state

    if(total > 0) {
      return Math.round((good / total) * 100)
    } else {
      return 0
    }
  }

  render() {

    const {good, neutral, bad} = this.state

    const total = this.countTotalFeedback()

    const positivePercentage = this.countPositiveFeedbackPercentage(total)

    return (
      <>
      <Sections title="Please leave feedback">
         <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
      </Sections>
      <Sections title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notifications message="There is no feedback" />
          )}
        </Sections>
      </>
    )
  }
}
