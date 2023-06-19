import React from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics';
import './Feedback/Feedback.modyle.css';

const Section = ({ good, neutral, bad, totalFeedback, positiveFeedbackPercentage, onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positiveFeedbackPercentage}
      />
    </div>
  );
};

export default Section;
