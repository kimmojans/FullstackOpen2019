import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/* EVENT HANDLER */

const App = (props) => {
    const [ counter, setCounter ] = useState(0)
    
    
    return (
        <div>
        <div> {counter} </div>
        <button onClick={() => setCounter(counter + 1)}>
            Plus
        </button>
        <button onClick={() => setCounter(0)}>
        Reset
        </button>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
