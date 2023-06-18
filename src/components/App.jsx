import React, { useState } from 'react';
import Section from './Section';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    const positive = Math.round((good * 100) / totalFeedback);
    return Number.isNaN(positive) ? 0 : positive;
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedbackPercentage={positiveFeedbackPercentage}
        onLeaveFeedback={onLeaveFeedback}
      />
    </div>
  );
};

export default App;





