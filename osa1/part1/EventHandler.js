import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/* EVENT HANDLER */

const App = (props) => {
    const [ counter, setCounter ] = useState(0)

    const setToValue = (value) =>  setCounter(value)


    return (
        <div>
        <Display counter={counter} />
        <Button
            handleClick={() => setToValue(counter + 1)}
            text='Plus'
        />
        <Button
            handleClick={() => setToValue(counter - 1)}
            text='Minus'
        />
        <Button
            handleClick={() => setToValue(0)}
            text='Reset'
        />
        </div>
    )

}

const Display = ({ counter }) => <div> {counter} </div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

ReactDOM.render(<App />, document.getElementById('root'))
