import PropTypes from 'prop-types';

import {SList, SItem, Span} from './statistics.module'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    const sArray = [
        { sItem: good, title: 'Good' },
        { sItem: neutral, title: 'Neutral' },
        { sItem: bad, title: 'Bad' },
        { sItem: total, title: 'Total feedbacks' },
        { sItem: positivePercentage, title: 'Positive feedbacks' }
      ]

      return (
        <SList>
            {sArray.map(({sItem, title}) => (
            <SItem key={title}>
                <p>
                    {title}
                    <Span>
                    {title !== 'Positive feedbacks' ? sItem : positivePercentage + '%'}
                    </Span>
                </p>
            </SItem>
            ))}
        </SList>
      )
    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}