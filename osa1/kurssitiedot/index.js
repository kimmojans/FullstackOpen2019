import React from 'react';
import ReactDOM from 'react-dom';


const App =() => {
    const course = 'Half stack application development'
    
    const parts = [
        {
        name: 'Fundamentals of React',
        excercises: 10
    },
    
    {
        name: 'Using props to pass data',
        excercises: 7
    },
    {
        name: 'State of component',
        excercises: 14
    }
    ]
    
    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    
    return (
        <div>
        <ul>
            <li> <Part parts={props.parts[0]} /> </li>
            <li> <Part parts={props.parts[1]} /> </li>
            <li> <Part parts={props.parts[2]} /> </li>
            </ul>
        </div>
    )
}

const Part =(props) => {
    return(
    <div>
        {props.parts.name}
            <ul> <li> Excercises: {props.parts.excercises} </li> </ul>        
    </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                Number of excercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
