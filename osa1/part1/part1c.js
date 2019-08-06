import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age

    return(
        <div>
            <p> Hello {name}, you're {age} years old </p>
            <p> So you were probably born {bornYear()} </p>
        </div>
    )
}

const Footer = () => {
    return(
        <div>
            <p>
            greeting app created by
            <a href="https://github.com/kimmojans">kimmojans</a>
            </p>
        </div>
    )
}

const App = () => {
    const nimi = 'Pekka'
    const ika = '10'
    
    return(
    <div>
        <h1>Greetings</h1>
        <Hello name="Arto" age={26 + 10} />
        <Hello name={nimi} age={ika}/>
        <Footer />
    </div>
)
}


ReactDOM.render(<App />, document.getElementById('root'));
