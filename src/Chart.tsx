import Botttomchart from "./Botttomchart"
import Linebar from "./Linebar"
import data from './data.json';

export default function Chart() {
  function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
  return (
    <div className="chart">
        <p className="chart__title">Spending - Last 7 days</p>
        <div className="chart__linebar-container">
        {data.map((item, index) => (
          <Linebar key={index} amount={item.amount} day={capitalize(item.day)} />
        ))}
        </div>
        
        <hr className="chart__line"/>      
        <Botttomchart/>
    </div>
    
  )
}
