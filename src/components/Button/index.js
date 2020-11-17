import './index.css'

const Button = ({symbol}) => {

    switch(symbol) {
        case '=' : 
            return <button className="equals">{symbol}</button>;
        case 0:
            return <button className="zero">{symbol}</button>;
        case '/':
        case 'x':
        case '-':
        case '+':
            return <button className="operators">{symbol}</button>;
        case '%':
        case 7:
        case 4:
        case 1:
            return <button className="buttons-left">{symbol}</button>;
        case '+/-':
        case 8:
        case 5:
        case 2:
        case ',':
            return <button className="buttons-middle">{symbol}</button>;
        case 'C':
        case 9:
        case 6:
        case 3:
            return <button className="buttons-right">{symbol}</button>;
        default: break;
    }

    return (
        <button>{symbol}</button>
    )
}

export default Button;