import React from 'react';
import ReactDOM from 'react-dom';

const App =() => {
    const course = 'Half stack application development'
    const part1 = 'Fundamentals of React'
    const excercises1 = 10
    const part2 ='Using props to pass data'
    const excercises2 = 7
    const part3 = 'State of component'
    const excercises3 = 14

    return (
        <div>
            <Header course={course}/>
            <Content pt1={part1} exc1={excercises1}/>
            <Content pt2={part2} exc2={excercises2} />
            <Content pt3={part3} exc3={excercises3} />
            <Total excr1={excercises1} excr2={excercises2} excr3={excercises3} />
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
            <p>
                {props.pt1} {props.exc1}
            </p>
            <p>
                {props.pt2} {props.exc2}
            </p>
            <p>
                {props.pt3} {props.exc3}
            </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                Number of excercises {props.excr1 + props.excr2 + props.excr3}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
