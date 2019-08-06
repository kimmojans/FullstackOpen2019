import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/* EVENT HANDLER */

const App = (props) => {
    const [ counter, setCounter ] = useState(0)

    const setToValue = (value) => setCounter(value)

       
    
    return (
        <div>
        <div> {counter} </div>
        <button onClick={() => setToValue(counter + 1)}>
            Plus
        </button>
        <button onClick={() => setToValue(0)}>
            Reset
        </button>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
