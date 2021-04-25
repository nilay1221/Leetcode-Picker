import React from 'react';
import Problem from 'components/Problem/Problem';
import './ProblemsList.css';



const ProblemsList = ({problems,onStatusChange}) => {
  //problems = [1,2,3];
  // console.log(problems);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th> </th>
          <th>Id</th>
          <th>Title</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Difficulty</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem,problemIdx) => {
            return <Problem key={problemIdx} id={problemIdx} problem={problem} onStatusChange={onStatusChange} />
        })}
      </tbody>
    </table>
  )
}

export default ProblemsList;
