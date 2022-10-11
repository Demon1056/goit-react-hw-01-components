import PropTypes from 'prop-types';
import data from "../datas.json/data.json"
import { StatisticsItem } from "./StatisticsItem"
import { StatisticsTitle,StatisticsItemArea, StatisticsText } from './Statistics.styled';
export const Statistics =({title})=>{
    return <>
    <StatisticsTitle>{title|| "UPLOAD STATS"}</StatisticsTitle>
  
    <StatisticsItemArea>
      {data.map(d=><StatisticsText key={d.id}><StatisticsItem label={d.label}
        percentage={d.percentage}
      /> </StatisticsText>)}
    </StatisticsItemArea>
  </>
}
Statistics.propTypes={
  title:PropTypes.string,
}
