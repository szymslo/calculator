import './index.css'

const Button = ({symbol, update}) => {

    switch(symbol) {
        case '=' : 
            return <button onClick={() => update(symbol)} className="equals">{symbol}</button>;
        case 0:
            return <button onClick={() => update(symbol)} className="zero">{symbol}</button>;
        case '/':
        case '-':
        case '+':
            return <button onClick={() => update(symbol)} className="operators">{symbol}</button>;
        case '%':
        case 7:
        case 4:
        case 1:
            return <button onClick={() => update(symbol)} className="buttons-left">{symbol}</button>;
        case '+/-':
        case 8:
        case 5:
        case 2:
        case '.':
            return <button onClick={() => update(symbol)} className="buttons-middle">{symbol}</button>;
        case 'C':
        case 9:
        case 6:
        case 3:
            return <button onClick={() => update(symbol)} className="buttons-right">{symbol}</button>;
        case 'x':
            return <button onClick={() => update('*')} className="operators">{symbol}</button>;
        default: break;
    }

    return <button onClick={() => update(symbol)}>{symbol}</button>
    
}

export default Button;