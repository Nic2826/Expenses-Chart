import Botttomchart from "./BotttomChart"
import Linebar from "./Linebar"

export default function Chart() {
  return (
    <div className="chart">
        <p className="chart__title">Spending - Last 7 days</p>
        <div className="chart__linebar-container">
        <Linebar/>
        <Linebar/>
        <Linebar/>
        <Linebar/>
        <Linebar/>
        <Linebar/>
        <Linebar/>
        </div>
        
        <hr className="chart__line"/>      
        <Botttomchart/>
    </div>
    
  )
}
