import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return(
        <div>
            <p>Hello {props.name}, you're {props.age} years old</p>
        </div>
    )
}

const Footer = () => {
    return(
        <div>
            greeeting app created by
            <a href="https://github.com/kimmojans">kimmojans</a>
        </div>
    )
}

const App = () => {
    const nimi = 'Åke'
    const ika = '12'
    
    return(
    <div>
        <h1>Greetings</h1>
        <Hello />
        <Hello name="Maya" age={26 + 10} />
        <Hello name={nimi} age={ika}/>
        <Footer />
    </div>
)
}


ReactDOM.render(<App />, document.getElementById('root'));
