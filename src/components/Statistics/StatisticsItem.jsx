import PropTypes from 'prop-types';
export const StatisticsItem = ({label, percentage})=> {
    return <>
    <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
</>
}
StatisticsItem.propTypes ={
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
}