import React from 'react';
import ReactDOM from 'react-dom';

const App =() => {
    const course = 'Half stack application development'
    
    const part1 = {
        name: 'Fundamentals of React',
        excercises: 10
    }
    
    const part2 = {
        name: 'Using props to pass data',
        excercises: 7
    }
    const part3 = {
        name: 'State of component',
        excercises: 14
    }

    return (
        <div>
            <Header course={course}/>
            <Content pt1={part1.name} exc1={part1.excercises} pt2={part2.name} exc2={part1.excercises} pt3={part3.name} exc3={part3.excercises}/>
            <Total totalexc={part1.excercises + part2.excercises + part3.excercises} />
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
            <Part part={props.pt1} exces={props.exc1} />
            <Part part={props.pt2} exces={props.exc2} />
            <Part part={props.pt3} exces={props.exc3} />
        </div>
    )
}

const Part =(props) => {
    return(
    <div>
        <p>
            {props.part} {props.exces}
        </p>
    </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                Number of excercises {props.totalexc}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
