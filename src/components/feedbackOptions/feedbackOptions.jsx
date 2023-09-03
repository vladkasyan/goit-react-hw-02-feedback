import PropTypes from 'prop-types';

import {List , Button} from './feedbackOptions.module'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <List>
        {options.map(option => (
          <li key={option}>
            <Button name={option} type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        ))}
      </List>
    );
  };
  
  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };