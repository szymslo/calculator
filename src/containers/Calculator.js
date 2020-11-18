import { useState } from 'react';
import Button from '../components/Button';
import Screen from '../components/Screen';
import './Calculator.css'

const calcButtons = ['%','+/-','C','/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='];

const Calculator = () => {

    const [previousOperand, setPreviousOperand] = useState('');
    const [currentOperand, setCurrentOperand] = useState('');
    const [operation, setOperation] = useState(undefined);
    const [done, setDone] = useState(false);

    const appendNumber = number => {
      if(done) {
        setCurrentOperand(number);
        setDone(false);
      }
      else if(number === '.' && currentOperand.includes('.')) {
        return;
      }
      else {
        setCurrentOperand(currentOperand.toString() + number.toString());
      }
    }

    const chooseOperation = operation => {
      if(currentOperand === '') return;
      else if(previousOperand !== '') {
        compute();
      }
      else {
        setOperation(operation);
        setPreviousOperand(currentOperand);
        setCurrentOperand('');
      }
    }

    const compute = () => {
      let result;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);
      if(isNaN(prev) || isNaN(current)) return;
      
      switch(operation) {
        case '+': 
          result = prev + current;
          break;
        case '-': 
          result = prev - current;
          break;
        case 'x': 
          result = prev * current;
          break;
        case '/': 
          result = prev / current;
          break;
        case '%': 
          result = (prev / current) * 100;
          break;
        default: return;
      }
      setCurrentOperand(result);
      setPreviousOperand('');
      setOperation(undefined);
      setDone(true);
    }

    const clear = () => {
      setCurrentOperand('');
      setPreviousOperand('');
      setOperation(undefined);
    }

    const click = symbol => {
      if(!isNaN(symbol) || symbol === '.') {
        appendNumber(symbol);
      }
      else if(symbol === '=') {
        compute();
      }
      else if(symbol === 'C') {
        clear();
      }
      else {
        chooseOperation(symbol);
      }
    }

    return (
      <div className="calculator">
        <Screen previous={previousOperand} current={currentOperand} op={operation}/>
          {calcButtons.map(item => {
            return <Button update={click} key={item} symbol={item}/>
          })}
      </div>
    )
}

export default Calculator;