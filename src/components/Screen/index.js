import './index.css'

const Screen = ({previous, current, op}) => {
    return (
        <div className="screen">
            <div className="previous">{previous} {op}</div>
            <div className="current">{current}</div>
        </div>
    )
}

export default Screen;