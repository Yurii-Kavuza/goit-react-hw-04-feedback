import { useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const handleFeedback = e => {
    const choise = e.target.dataset.value;

    switch (choise) {
      case 'good':
        setGood(state=>state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const values = Object.values(options);
    const totalScore = values.reduce((total, value) => total + value, 0);
    return totalScore;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <>
      <Section title={'Please leave feadback'}>
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title={'Statistics:'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
