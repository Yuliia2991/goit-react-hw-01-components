import PropTypes from 'prop-types';
import { randomColor } from '../../js/random-color';
import {
  StatContainer,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats}) => {
    return (
        <StatContainer>
            {title && <StatTitle>{title}</StatTitle>}
            <StatList>
                {stats.map(({id, label, percentage}) =>
                    <StatItem key={id} style={{ backgroundColor: randomColor() }}>
                        <StatLabel>{label}</StatLabel>
                        <StatPercentage>{percentage}%</StatPercentage>
                    </StatItem>)}
            </StatList>
        </StatContainer>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })).isRequired
};

