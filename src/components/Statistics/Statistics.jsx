import PropTypes from 'prop-types';
import data from "../datas.json/data.json"
import { StatisticsItem } from "./StatisticsItem"
export const Statistics =({title})=>{
    return <section class="statistics">
    <h2 class="title">{title|| "Upload stats"}</h2>
  
    <ul class="stat-list">
      {data.map(d=><li key={d.id}><StatisticsItem label={d.label}
        percentage={d.percentage}
      /> </li>)}
    </ul>
  </section>
}
Statistics.propTypes={
  title:PropTypes.string,
}