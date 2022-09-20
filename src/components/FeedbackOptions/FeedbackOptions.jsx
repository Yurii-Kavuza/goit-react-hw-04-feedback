import PropTypes from 'prop-types';
import { Buttons, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Buttons>
    {options.map(key => (
      <Button
        key={key}
        type="button"
        data-value={key}
        onClick={onLeaveFeedback}
      >
        {capitalizeFirstLetter(key)}
      </Button>
    ))}
  </Buttons>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  ratingIncrement: PropTypes.func,
};

function capitalizeFirstLetter(str) {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

export default FeedbackOptions;
