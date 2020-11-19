import './index.css'

const Screen = ({previous, current}) => {
    return (
        <div className="screen">
            <div className="previous">{previous}</div>
            <div className="current">{current}</div>
        </div>
    )
}

export default Screen;