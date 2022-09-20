import PropTypes from 'prop-types';
import { Result } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <Result>
      Good: <span>{good}</span>
    </Result>
    <Result>
      Neutral: <span>{neutral}</span>
    </Result>
    <Result>
      Bad: <span>{bad}</span>
    </Result>
    <Result>
      Total: <span>{total}</span>
    </Result>
    <Result>
      Positive feedback: <span>{positivePercentage}%</span>
    </Result>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
