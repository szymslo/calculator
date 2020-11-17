import Button from '../components/Button';
import Screen from '../components/Screen';
import './Calculator.css'

const calcButtons = ['%','+/-','C','/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,',','='];

const Calculator = () => {

    return (
      <div className="calculator">
        <Screen/>
          {calcButtons.map(item => {
            return <Button key={item} symbol={item}/>
          })}
      </div>
    )
}

export default Calculator;