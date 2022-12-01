import PropTypes from 'prop-types';
import { Buttons, Button } from './FeedbackOptions.styled';
import { CgSmileMouthOpen, CgSmileNeutral, CgSmileSad } from 'react-icons/cg';

const icons = {
  good: CgSmileMouthOpen,
  neutral: CgSmileNeutral,
  bad: CgSmileSad,
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Buttons>
    {options.map(key => {
      const Icon = icons[key];
      return (
        <Button
          key={key}
          type="button"
          data-value={key}
          onClick={onLeaveFeedback}
        >
          <Icon />
          {capitalizeFirstLetter(key)}
        </Button>
      );
    })}
  </Buttons>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

function capitalizeFirstLetter(str) {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

export default FeedbackOptions;
