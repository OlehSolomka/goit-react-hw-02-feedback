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

  handlerGoodIncr = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  handlerNeutralIncr = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };

  handlerBadIncr = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
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
          <FeedbackOptions
            onGoodIncr={this.handlerGoodIncr}
            onNeutralIncr={this.handlerNeutralIncr}
            onBadIncr={this.handlerBadIncr}
          />
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
