import React from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics';
import './Feedback/Feedback.modyle.css';


const Section = ({ feedback, totalFeedback, positiveFeedbackPercentage, onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        feedback={feedback}
        total={totalFeedback}
        positivePercentage={positiveFeedbackPercentage}
      />
    </div>
  );
};

export default Section;
