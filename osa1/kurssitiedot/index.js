import React from 'react';
import ReactDOM from 'react-dom';


const App =() => {
/* Datan määrittely */
    const course = {
        name: 'Half stack application development',
        parts : [
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
    }    
    /* Varmistetaan datan oikeellisuus console.logilla */
    console.log(course.parts)
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
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
/* Content-osion tulostuksen muotoilu listaksi */
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
/* Part-osion tulosten muotoilu kaksitasoiseksi listaksi */
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
                Total number of excercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
