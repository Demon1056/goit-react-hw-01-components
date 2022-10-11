import PropTypes from 'prop-types';
import { StatisticsFormatText, StatisticsPercentText } from './StatisticsItem.styled';
export const StatisticsItem = ({label, percentage})=> {
    return <>
    <StatisticsFormatText>{label}</StatisticsFormatText> <br/>
        <StatisticsPercentText>{percentage}%</StatisticsPercentText>
</>
}
StatisticsItem.propTypes ={
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
}