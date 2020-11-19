/* eslint no-eval: 0 */
import { useState } from 'react';
import Button from '../components/Button';
import Screen from '../components/Screen';
import './Calculator.css';

const calcButtons = ['%','+/-','C','/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='];
const reg = new RegExp("[+-/*]", "g");

const Calculator = () => {

    const [previousOperand, setPreviousOperand] = useState('');
    const [currentOperand, setCurrentOperand] = useState('');
    const [operation, setOperation] = useState(undefined);
    const [done, setDone] = useState(false);

    const appendNumber = number => {
      if(done) {
        setCurrentOperand(number.toString());
        setDone(false);
      }
      // no infinite .
      else if(number === '.' && currentOperand.includes('.')) {
        return;
      }
      // no infinite zeros at beggining
      else if(number === 0 && currentOperand === '0') {
        return;
      }
      else {
        setCurrentOperand(currentOperand.toString() + number.toString());
      }
    }

    const chooseOperation = operation => {
      if(currentOperand === '') return;

      //adding multiple operation to top expression
      else if(previousOperand !== '') {
        setOperation(operation);
        setPreviousOperand(previousOperand + ' ' + currentOperand + ' ' + operation);
        setCurrentOperand('');
      }
      else {
        setOperation(operation);
        setPreviousOperand(currentOperand + ' ' + operation);
        setCurrentOperand('');
      }
    }

    const compute = () => {
      let result, prev, current;

      //evaluate top expression when there is no bottom operator
      if(currentOperand === '' && previousOperand !== '') {
        result = eval(previousOperand.slice(0, -1));
        setCurrentOperand(result.toString());
        setPreviousOperand('');
        setOperation(undefined);
        setDone(true);
      }

      else {
        //check if there is more than one (plus/minus/multiple/divide) operator
        if((previousOperand.match(reg) || []).length > 1) {
          //need to also evaluate top expression
          prev = eval(previousOperand.slice(0, -1));
        }
        else {
          prev = parseFloat(previousOperand);
        }
        
        current = parseFloat(currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        
        switch(operation) {
          case '+': 
            result = prev + current;
            break;
          case '-': 
            result = prev - current;
            break;
          case '*': 
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

        setCurrentOperand(result.toString());
        setPreviousOperand('');
        setOperation(undefined);
        setDone(true);
      }
    }

    const clear = () => {
      setCurrentOperand('');
      setPreviousOperand('');
      setOperation(undefined);
    }

    const swap = () => {
      if(currentOperand !== '' && currentOperand.includes('-')) {
        setCurrentOperand(currentOperand.substring(1));
      }
      else if(currentOperand !== '') {
        setCurrentOperand('-' + currentOperand);
      }
      else return;
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
      else if(symbol === '+/-') {
        swap();
      }
      else {
        chooseOperation(symbol);
      }
    }

    return (
      <div className="calculator">
        <Screen previous={previousOperand} current={currentOperand}/>
          {calcButtons.map(item => {
            return <Button update={click} key={item} symbol={item}/>
          })}
      </div>
    )
}

export default Calculator;