const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10 
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.parts[0].name} has {course.parts[0].exercises} exercises</p>
      <p>{course.parts[1].name} has {course.parts[1].exercises} exercises</p>
      <p>{course.parts[2].name} has {course.parts[2].exercises} exercises</p>
    </div>
  )
}

export default App;