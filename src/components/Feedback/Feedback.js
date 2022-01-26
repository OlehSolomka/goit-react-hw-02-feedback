import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistic from "./Statistic/Statistic";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class Feedback extends Component {
  static defaultProps = {
    defaultGood: 0,
    defaultNeutral: 0,
    defaultBad: 0,
    defaultTotal: 0,
  };
  static propTypes = {};

  totalFeedback = this.props.defaultTotal;
  positivePersentage;

  state = {
    good: this.props.defaultGood,
    neutral: this.props.defaultNeutral,
    bad: this.props.defaultBad,
  };

  leaveFeedback = (target) => {
    this.setState((prevState) => ({ [target]: prevState[target] + 1 }));
  };

  countTotalFeedback = () => {
    this.totalFeedback = this.state.bad + this.state.neutral + this.state.good;
  };
  countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      this.totalFeedback - (this.state.bad + this.state.neutral);
    this.positivePersentage = (positiveFeedback / this.totalFeedback) * 100;
  };
  render() {
    const { good, neutral, bad } = this.state;
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={"Please leave Feedback"}>
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        </Section>
        {this.totalFeedback ? (
          <Section title={"Statistic"}>
            <Statistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.totalFeedback}
              positivePersentage={this.positivePersentage}
            />
          </Section>
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </div>
    );
  }
}

export default Feedback;
