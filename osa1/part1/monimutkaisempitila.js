import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/* 1D - MONIMUTKAISEMPI TILA, REACTIN DEBUGGAUS */

const App = (props) => {
    const [ left, setLeft ] = useState(0)
    const [ right, setRight ] = useState(0)
    const [allClicks, setAll] = useState([])
    

 const handleLeftClick = () => {
     setAll(allClicks.concat('L'))
     setLeft(left + 1)
 }


 const handleRightClick = () => {
     setAll(allClicks.concat('R'))
     setRight(right + 1)
 }


    return (
        <div>
            <div>
                {left}
                <Button handleClick={handleLeftClick} text='left' />
                <Button handleClick={handleRightClick} text='left' />
                {right}
                <History allClicks={allClicks} />
            </div>
        </div>
    )

}

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons left and right
            </div>
        )
    }

    return (
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)


ReactDOM.render(<App />, document.getElementById('root'))
