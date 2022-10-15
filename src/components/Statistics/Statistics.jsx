import PropTypes from 'prop-types';
import { StatisticsItem } from "./StatisticsItem"
import { StatisticsTitle,StatisticsItemArea, StatisticsText } from './Statistics.styled';
export const Statistics =({title, data})=>{
    return <>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}
  
    <StatisticsItemArea>
      {data.map(d=><StatisticsText key={d.id}><StatisticsItem label={d.label}
        percentage={d.percentage}
      /> </StatisticsText>)}
    </StatisticsItemArea>
  </>
}
Statistics.propTypes={
  title:PropTypes.string,
  data:PropTypes.arrayOf(PropTypes.object).isRequired
}
