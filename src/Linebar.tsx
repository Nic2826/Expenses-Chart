type LinebarProps = {
  amount: number;
  day: string;
};

export default function Linebar({ amount, day }: LinebarProps)  {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'short' });
  console.log(currentDay);

  

  return (
    <div className="linebar">    
     <p className="linebar__amount">${amount.toFixed(2)}</p>

        <div 
        className={currentDay === day ? "linebar__length-today" : "linebar__length"} 
        style={{ height: `${amount*2}px` }} 
        ></div>
        <p className="linebar__day">{day}</p>
    </div>
  )
}
